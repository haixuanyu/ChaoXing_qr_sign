<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue'
  import {
    onPullDownRefresh
  } from '@dcloudio/uni-app'
  import CryptoJS from 'crypto-js'
  const text = ref('')
  const mise = ref([])

  // 账号列表
  const accounts = ref([])

  // 选中的账号 ID 列表
  const selectedIds = ref([])
  const msg = ref('')

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


          resolve(cookieStr);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };



  // 当前选中的账号对象列表
  const selectedAccounts = computed(() =>
    accounts.value.filter(account => selectedIds.value.includes(account.id))
  )

  // 扫码状态与结果
  const scanResult = ref('')
  const query = ref({})
  const isScanning = ref(false)

  // 切换账号选中状态
  const toggleAccount = (id) => {
    const index = selectedIds.value.indexOf(id)
    if (index === -1) {
      selectedIds.value.push(id)
    } else {
      selectedIds.value.splice(index, 1)
    }
  }
  const getQueryParams = (url) => {
    // 1. 安全处理：转字符串，防止 null/undefined
    const str = String(url || '')

    // 2. 使用正则提取 ? 后面的查询字符串（忽略 #hash）
    const match = str.match(/\?([^#]*)/)
    if (!match) return {}

    const queryStr = match[1]
    const params = {}

    queryStr.split('&').forEach((pair) => {
      if (!pair) return

      const [key, value] = pair.split('=')
      if (!key) return

      try {
        const decodedKey = decodeURIComponent(key.trim())
        const decodedValue = value ? decodeURIComponent(value) : ''
        params[decodedKey] = decodedValue
      } catch (e) {
        params[key.trim()] = value || ''
      }
    })

    return params
  }
  const handleScanmini = async (Ids, resu) => {
    const promises = Ids.map(id => { // 注意：这里不需要 async
      return new Promise(async (resolve) => { // 外层 Promise 用于 resolve 结果
        try {
          const query = getQueryParams(resu);
          console.log(query)
          const coo = await getcookie(accounts.value.find(acc => acc.id === id).phone, accounts.value
            .find(acc => acc.id === id).password);
          const requrl =
            `https://mobilelearn.chaoxing.com/pptSign/stuSignajax?activeId=${query.id}&enc=${query.enc}`;
          // ✅ 关键：在 uni.request 的回调中 resolve
          uni.request({
            url: requrl,
            method: 'GET',
            header: {
              'Cookie': coo
            },
            success: (res) => {
              const message = res.data || '无数据';

              resolve({
                success: true,
                id,
                message,
              });
            },
            fail: (err) => {
              const errorMsg = `请求失败:${err.errMsg}`;
              resolve({
                success: false,
                id,
                error: errorMsg
              });
            }
          });
        } catch (error) {
          // 获取 cookie 失败
          const errorMsg = `登录失败:${error.message}`;
          uni.showToast({
            title: `账号${id}:${errorMsg}`,
            icon: 'none'
          });
          resolve({
            success: false,
            id,
            error: errorMsg
          });
        }
      });
    });

    // ✅ 此时 Promise.all 会等待所有 uni.request 完成
    return await Promise.all(promises);
  };

  // 扫码操作
  const handleScan = (ids) => {
    if (selectedAccounts.value.length === 0) {
      uni.showToast({
        title: '请先选择至少一个账号',
        icon: 'none'
      })
      return
    }
    isScanning.value = true

    uni.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success: async ({
        result
      }) => {
        const pmise = await handleScanmini(ids, result)
        console.log('mise:', pmise)
        mise.value = pmise
        scanResult.value = true
        uni.showToast({
          title: '扫码完成',
          icon: 'success'
        })
      },
      fail: (err) => {
        let msg = '扫码失败'
        if (err.errMsg.includes('cancel')) msg = '用户取消'
        else if (err.errMsg.includes('auth')) msg = '相机权限被拒绝'
        uni.showToast({
          title: msg,
          icon: 'none'
        })
      },
      complete: () => {
        isScanning.value = false
      }
    })
  }
  const loadAccountList = () => {
    try {
      const data = uni.getStorageSync('accountList')
      if (data) {
        accounts.value = data

      }
    } catch (e) {
      console.error('读取账号列表失败:', e)
    }
  }
  onPullDownRefresh(async () => {
    console.log('触发下拉刷新')
    loadAccountList()
    uni.stopPullDownRefresh() // 停止刷新动画
  })

  onMounted(() => {
    loadAccountList()
  })
</script>

<template>
  <view class="container">
    <!-- 页面标题 -->
    <view class="header">
      <text class="title">扫码账号</text>
    </view>

    <!-- 账号列表 -->
    <view class="account-list">
      <view v-for="account in accounts" :key="account.id" class="account-item">
        <label class="account-label" @click="toggleAccount(account.id)">
          <!-- 自定义复选框 -->
          <view class="custom-checkbox" :class="{ checked: selectedIds.includes(account.id) }">
            <text v-if="selectedIds.includes(account.id)" class="icon-check">✔</text>
          </view>
          <!-- 账号信息 -->
          <text class="account-name">{{ account.name }}</text>
        </label>
      </view>
    </view>

    <!-- 已选提示 -->
    <view class="selected-tip">
      <text v-if="selectedAccounts.length > 0">已选择 {{ selectedAccounts.length }} 个账号</text>
      <text v-else>暂未选择账号</text>
    </view>

    <!-- 扫码按钮 -->
    <view class="action-section">
      <button class="scan-btn" :disabled="selectedAccounts.length === 0" :loading="isScanning"
        @click="handleScan(selectedIds)">
        {{ isScanning ? '扫描中...' : '扫码获取信息' }}
      </button>
    </view>
    <view>{{text}}</view>

    <!-- 扫码结果 -->
    <view v-if="scanResult" class="result-section">
      <view>签到结果</view>
      <view v-for="(item, index) in mise" :key="index">
        <view> {{ accounts.find(acc => acc.id === item.id)?.name }}-{{ item.message }}</view>
      </view>
    </view>
  </view>
</template>

<style>
  .container {
    padding: 20px;
    background-color: #f8f8f8;
    min-height: 100vh;
  }

  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .account-list {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .account-item {
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
  }

  .account-item:last-child {
    border-bottom: none;
  }

  .account-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .custom-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    margin-right: 10px;
  }

  .custom-checkbox.checked {
    background-color: #007aff;
    border-color: #007aff;
  }

  .icon-check {
    font-weight: bold;
  }

  .account-name {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }

  .selected-tip {
    margin: 15px 0;
    text-align: center;
    color: #666;
    font-size: 14px;
  }

  .action-section {
    margin: 30px 0;
    padding: 0 20px;
  }

  .scan-btn {
    background-color: #007aff;
    color: white;
    font-size: 16px;
    border-radius: 8px;
  }

  .scan-btn:disabled {
    background-color: #ccc;
  }

  .result-section {
    padding: 15px;
    background: #fff;
    border-radius: 8px;
    margin-top: 20px;
  }

  .result-label {
    font-weight: bold;
    color: #333;
  }

  .result-text {
    display: block;
    margin-top: 8px;
    color: #555;
    word-break: break-all;
    line-height: 1.5;
  }
</style>