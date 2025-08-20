<template>
  <div class="class-view">

    <!-- 班级列表 -->
    <div class="section">
      <!-- 使用原生 view 替代 van-list -->
      <div class="class-list">
        <div v-for="item in filteredCourses" :key="item.clazzId" class="class-item" @click="toClassActive(item)">
          <!-- 图标区域 -->
          <div class="class-icon">
            <image :src="item.imageUrl" class="round-img" mode="aspectFit"></image>
          </div>

          <!-- 文字内容 -->
          <div class="class-content">
            <div class="class-title">{{ item.courseName }}</div>
            <div class="class-id">教师: {{ item.teacher}}</div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    showToast
  } from 'vant'
  import {
    ref,
    onMounted,
    computed,
  } from 'vue'
  import {
    onLoad,
    onPullDownRefresh
  } from '@dcloudio/uni-app'
  import CryptoJS from 'crypto-js'
  const list = ref([])

  function encryptByAES(message) {
    const chaoxingkey = 'u2oh6Vu^HWe4_AES'
    const utf8Key = CryptoJS.enc.Utf8.parse(chaoxingkey)
    const utf8Iv = CryptoJS.enc.Utf8.parse(chaoxingkey)


    const encrypted = CryptoJS.AES.encrypt(message, utf8Key, {
      iv: utf8Iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      // 关键：避免 CryptoJS 自动派生密钥
    })

    // 返回原始密文的 Base64
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64)
  }
  onPullDownRefresh(async () => {
    console.log('触发下拉刷新')
    let coooo = uni.getStorageSync('CHAOXING_COOKIE');
    await fetchData(coooo)
    uni.showToast({
      icon: 'success',
      title: '刷新成功'
    })
    uni.stopPullDownRefresh() // 停止刷新动画
  })






  const getcookie = (username, password) => {
    return new Promise((resolve, reject) => {
      const eusername = encryptByAES(username);
      const epassword = encryptByAES(password);
      console.log('加密后的用户名:', eusername);
      console.log('加密后的密码:', epassword);
      uni.request({
        url: 'https://passport2.chaoxing.com/fanyalogin',
        method: 'POST',
        data: {
          'fid': '-1',
          'uname': eusername,
          'password': epassword,
          'refer': 'http://i.mooc.chaoxing.com',
          't': 'true',
          'forbidotherlogin': '0',
          'validate': '',
          'doubleFactorLogin': '0',
          'independentId': '0',
          'independentNameId': '0'
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        success: (res) => {
          const setCookie = res.cookies;
          if (!setCookie || setCookie.length === 0) {
            return reject('登录失败，未返回 Cookie');
          }

          const cookieStr = setCookie
            .map(cookie => {
              const trimmed = cookie.trim();
              const end = trimmed.indexOf(';');
              return end > -1 ? trimmed.substring(0, end) : trimmed;
            })
            .filter(Boolean)
            .join('; ');
          uni.setStorageSync('CHAOXING_COOKIE', cookieStr);
          // ✅ 关键：用 resolve 返回结果
          resolve(cookieStr);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };

  const fetchData = (coo) => {
    uni.request({
      url: 'http://mooc1-api.chaoxing.com/mycourse/backclazzdata',
      header: {
        'Cookie': coo
      },
      success: (res) => {
        list.value = res.data;
        console.log('✅ 请求成功', res.data);
      },
      fail(err) { // ✅ 加上 async
        console.log('❌ 请求失败，准备重试...', err);
        uni.showToast({
          title: '请求失败.',
          icon: 'none',
          duration: 2000
        });
      }
    });
  };


  function isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      const exp = payload.exp * 1000 // 转为毫秒
      return Date.now() > exp
    } catch (e) {
      console.error('Token 解码失败', e)
      return true // 解码失败视为已过期
    }
  }



  // 筛选并格式化课程数据
  const filteredCourses = computed(() => {
    if (!list.value?.channelList) return []

    return list.value.channelList
      .filter(item => {
        // 只保留包含课程数据的项
        return (
          item.content?.course?.data &&
          Array.isArray(item.content.course.data) &&
          item.content.course.data.length > 0
        )
      })
      .map(item => {
        const content = item.content
        const course = content.course.data[0] // 取第一个课程

        return {
          clazzId: String(content.id), // 班级 ID
          courseId: String(course.id), // 课程 ID
          courseName: course.name, // 课程名称
          teacher: course.teacherfactor, // 授课教师
          imageUrl: course.imageurl // 加入的图片 URL
        }
      })
  })















  // 当前激活的底部 tab
  const activeTab = ref('class')

  // 跳转到班级详情页
  const toClassActive = (item) => {
    uni.navigateTo({
      url: `/pages/ClassActive?courseId=${item.courseId}&clazzId=${item.clazzId}`

    })
  }


  onMounted(
    async () => {

      let cookie = uni.getStorageSync('CHAOXING_COOKIE');
      const pAuthToken = cookie.match(/p_auth_token=([^;]+)/)?.[1]
      if (!cookie) {
        uni.showToast({
          icon: 'none',
          title: '请先在【账号管理】中添加账号，重启应用或下拉刷新即可查看',
          duration: 2500
        })
      }
      if (isTokenExpired(pAuthToken) || !cookie) {
        const data = uni.getStorageSync('accountList')
        if (!data?.[0]?.phone) {
          return
        }

        const {
          phone: user,
          password: word
        } = data[0]
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('登录超时')), 2500)
        )

        try {
          const newcookie = await Promise.race([
            getcookie(user, word),
            timeout
          ])

          uni.setStorageSync('CHAOXING_COOKIE', newcookie)
          cookie = newcookie
        } catch (e) {
          uni.showToast({
            icon: 'none',
            title: '登录失败'
          })
          return
        }

      } else {
        console.log('登录有效')
      }
      console.log('当前cookie：', cookie)
      if (cookie) {
        fetchData(cookie)
      }
      activeTab.value = 'class'
    })
</script>

<style scoped>
  /* 全局容器 */
  .class-view {
    background-color: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 50px;
  }

  .round-img {
    width: 100%;
    height: 100%;
  }

  .header-title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }

  /* 班级列表区域 */
  .section {
    padding: 10px;
  }

  .class-list {
    padding-top: 10px;
  }

  /* 每个班级项 */
  .class-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: white;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .class-item:last-child {
    margin-bottom: 0;
  }

  .class-item:active {
    background-color: #f0f0f0;
  }


  /* 图标区域 */
  .class-icon {
    width: 64px;
    height: 36px;
    border-radius: 3px;
    background-color: #eaf4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    overflow: hidden;
  }

  /* 字体图标（使用 vant-icon 字体） */
  .icon {
    font-family: 'vant-icon';
    font-size: 24px;
    color: #46a0fc;
  }

  /* 图标编码映射 */
  .icon.bookmark {
    content: '\e605';
  }

  /* bookmark-o */
  .icon.arrow {
    content: '\e604';
  }

  /* arrow */
  .icon.home {
    content: '\e601';
  }

  /* home-o */
  .icon.user {
    content: '\e607';
  }

  /* user-o */

  /* 文字内容 */
  .class-content {
    flex: 1;
    overflow: hidden;
  }

  .class-title {
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .class-id {
    font-size: 12px;
    color: #999;
  }

  .class-arrow {
    margin-left: 10px;
    color: #c8c9cc;
  }

  /* 底部导航栏 */
  .bottom-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: white;
    display: flex;
    border-top: 1px solid #eee;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .tab-item .icon {
    font-size: 20px;
    color: #666;
    margin-bottom: 2px;
  }

  .tab-item .text {
    font-size: 12px;
    color: #666;
  }

  /* 激活状态样式 */
  .tab-item .active {
    color: #46a0fc;
  }
</style>