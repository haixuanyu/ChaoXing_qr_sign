<template>
  <view class="class-active-container">
    <!-- 活动列表 -->
    <view class="activity-list">
      <view v-for="(item, index) in actlist" :key="index" class="activity-item" @click="onItemClick(item)">
        <view class="activity-icon">
          <image :src="item.logo" style="width: 48px;height: 48px;"></image>
        </view>
        <view class="activity-content">
          <view class="activity-title">{{ decodeUnicode(item.nameOne) }}</view>
          <view class="activity-desc">{{ getStatusText(item.status) }}{{ item.nameFour }}</view>
        </view>
      </view>

      <!-- 加载完成提示 -->
      <view v-if="finished" class="no-more">没有更多了</view>
    </view>

  </view>

</template>
<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import {
    onLoad
  } from '@dcloudio/uni-app'
  // 页面参数
  const courseName = ref('')
  const courseId = ref('')
  const clazzId = ref('')

  // 数据状态
  const actlist = ref([])
  const loading = ref(false)
  const finished = ref(false)
  const currentActiveItem = ref(null)


  // 页面加载
  // onMounted(() => {
  //   const pages = getCurrentPages()
  //   console.log(`age:${pages}`)
  //   const currentPage = pages[pages.length - 1]
  //   const options = currentPage.options
  //   courseName.value = decodeURIComponent(options.courseName || '未知课程')
  //   courseId.value = options.courseId
  //   clazzId.value = options.clazzId

  //   fetchActiveList()
  // })
  onLoad((options) => {

    // 安全提取参数（URL 参数都是字符串）
    courseId.value = options.courseId || ''
    clazzId.value = options.clazzId || ''
    console.log('监听页面参数:', courseId.value)

    // 处理 courseName（解码）
    if (options.courseName) {
      try {
        courseName.value = decodeURIComponent(options.courseName)
      } catch (e) {
        console.warn('解码 courseName 失败，使用原值:', options.courseName)
        courseName.value = options.courseName
      }
    }

    // 参数已获取，可以请求数据
    // 
    fetchActiveList()
  })

  function decodeUnicode(str) {
    // 添加引号以使它成为一个合法的 JSON 字符串
    return JSON.parse(`"${str}"`);
  }


  // 请求签到列表
  const fetchActiveList = () => {
    loading.value = true
    const cookie = uni.getStorageSync('CHAOXING_COOKIE');
    const url =
      `https://mobilelearn.chaoxing.com/v2/apis/active/student/activelist?classId=${clazzId.value}&courseId=${courseId.value}&fid=1287`
    console.log(cookie)
    uni.request({
      url,
      method: 'GET',
      header: {
        'Cookie': cookie,
        'Referer': 'https://mooc.chaoxing.com/',

      },
      success: ({
        data
      }) => {
        console.log(data)
        if (data.result === 1 && data.data?.activeList) {
          actlist.value = data.data.activeList.slice(0, 25)
        } else {
          uni.showToast({
            title: '数据异常',
            icon: 'none'
          })
        }
        finished.value = true
      },
      fail: () => {
        uni.showToast({
          title: '请求失败',
          icon: 'none'
        })
      },
      complete: () => {
        loading.value = false
      }
    })
  }


  // 点击活动项
  const onItemClick = (item) => {
    if (item.otherId === '2') {
      uni.switchTab({
        url: '/pages/QRcode'
      })
    } else {
      uni.showToast({
        title: '前面的区域以后再来探索吧',
        icon: 'none'
      })
    }
  }


  // 格式化时间
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const h = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    return `${h}:${m}`
  }



  // 状态文本
  const getStatusText = (userStatus) =>
    userStatus === 1 ? '进行中' : userStatus === 2 ? '已结束' : ''
</script>


<style>
  /* 使用通用样式，兼容多端 */
  .icon {
    font-family: 'iconfont' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  .class-active-container {
    background-color: #f5f5f5;
    min-height: 100vh;
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 999;
    background: #46a0fc;
    padding: 12px 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-left {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .header-left:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .header-title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    flex: 1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-right {
    width: 30px;
  }

  .activity-list {
    padding: 10px 10px 0;
  }

  .activity-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: white;
    margin-bottom: 10px;
  }

  .activity-item:last-child {
    margin-bottom: 0;
  }

  .activity-item:active {
    background-color: #f0f0f0;
  }

  .activity-icon {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    font-size: 24px;
    overflow: hidden;
  }

  .activity-content {
    flex: 1;
    overflow: hidden;
  }

  .activity-title {
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .activity-desc {
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .activity-extra {
    margin-left: 10px;
  }

  .activity-time {
    font-size: 12px;
    color: #999;
  }

  .no-more {
    text-align: center;
    color: #999;
    font-size: 14px;
    padding: 10px 0;
  }

  /* 扫码弹窗样式 */
  .scanner-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .popup-content {
    position: relative;
    width: 80%;
    background: white;
    border-radius: 12px;
    overflow: hidden;
  }

  .popup-header {
    padding: 15px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #eee;
  }

  .popup-header .close-btn {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 28px;
    color: #999;
  }

  .scanner-placeholder {
    text-align: center;
    padding: 30px 0;
  }

  .scanner-placeholder text {
    display: block;
    margin-top: 10px;
    color: #999;
  }

  .scanner-actions {
    padding: 20px;
  }

  .scan-btn {
    width: 100%;
    background: #46a0fc;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 12px 0;
    font-size: 16px;
  }

  .scan-btn:disabled {
    background: #ccc;
  }
</style>