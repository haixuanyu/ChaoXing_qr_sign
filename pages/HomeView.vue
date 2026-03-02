<template>
  <view class="profile-container">
    <view class="profile-section">
      <!-- 头像（添加点击事件） -->
      <view class="avatar-container" @click="changeAvatar">
        <image class="avatar" :src="avatarUrl" mode="aspectFill" />
        <!-- 用户信息 -->
        <view class="user-info">
          <text class="user-name">{{name}}</text>
        </view>
      </view>

    </view>


    <!-- 功能列表 -->
    <view class="function-list">
      <view class="function-item" @click="toAccountManagement">
        <image src="/static/account.png" class="function-icon"></image>
        <text class="function-title">账号管理</text>
        <text class="arrow">›</text>
      </view>
      <view class="function-item" @click="tomian">
        <image src="/static/mianze.png" class="function-icon"></image>
        <text class="function-title">使用须知</text>
        <text class="arrow">›</text>
      </view>
      <view class="function-item" @click="toqqgroup">
        <image src="/static/QQ .png" class="function-icon"></image>
        <text class="function-title">交流群</text>
        <text class="arrow">›</text>
      </view>
      <view class="function-item" @click="togithub">
        <image src="/static/github.png" class="function-icon"></image>
        <text class="function-title">github仓库</text>
        <text class="arrow">›</text>
      </view>
      <view class="function-item" @click="money">
        <image src="/static/toubi.png " class="function-icon"></image>
        <text class="function-title">赞助作者</text>
        <text class="arrow">›</text>
      </view>

    </view>
  </view>


</template>

<script setup>
  import {
    ref
  } from 'vue'

  import {
    onLoad
  } from '@dcloudio/uni-app'
  const name = ref('用户_0712')
  const avatarUrl = ref(
    'https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=dc9e82874dfbfbeddc0c3e7948c0db0e/32fa828ba61ea8d37b2e67bc910a304e251f587d.jpg'
  )


  // 更换头像函数
  const changeAvatar = () => {
    uni.chooseImage({
      count: 1, // 只选择一张
      sizeType: ['compressed'], // 可选原图或压缩
      sourceType: ['album', 'camera'], // 相册或拍照
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]

        // ✅ 方法1：直接使用临时路径（页面刷新后失效）
        avatarUrl.value = tempFilePath

        // ✅ 方法2：保存到本地（推荐，持久化）
        uni.saveFile({
          tempFilePath,
          success: (saveRes) => {
            avatarUrl.value = saveRes.savedFilePath
            // 可选：保存路径到 storage
            uni.setStorageSync('USER_AVATAR', saveRes.savedFilePath)
          }
        })
      },

      fail: (err) => {
        console.log('选择头像失败', err)
      }
    })
  }

  // 当前激活的 tab
  const activeTab = ref('home') // 默认“我的”是当前页

  // 组件挂载后，尝试同步当前页面状态（可选）




  // 功能跳转（非 tabBar 页面）
  const toAccountManagement = () => {
    uni.navigateTo({
      url: '/pages/AccountView'
    })
  }
  const money = () => {
    uni.vibrateShort()
    uni.showToast({
      icon: 'none',
      title: '好好生活，就是最大的支持。若喜欢，点个Github Star 就够了 ⭐'
    })

    // author:海轩
  }

  const togithub = () => {
    const url = 'https://github.com/haixuanyu/ChaoXing_qr_sign';
    plus.runtime.openURL(url);
  }

  const toqqgroup = () => {
    const key = 'Q8ImfjZHJuejtQlP14xdPgmtMeUplUoL'; // 你的群 key
    let url = '';

    // 判断平台
    const platform = uni.getSystemInfoSync().platform; // 'android' 或 'ios'

    if (platform === 'android') {
      url =
        `mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3D${encodeURIComponent(key)}`;
    } else if (platform === 'ios') {
      url = `mqqapi://card/show_pslcard?src_type=internal&version=1&key=${key}&card_type=group&source=external`;
    }
    plus.runtime.openURL(url, function() {
      // 失败回调：QQ 未安装
      uni.showToast({
        title: '未安装QQ',
        icon: 'none',
        duration: 2000
      });
    });
  }

  const tomian = () => {
    uni.navigateTo({
      url: '/pages/disclaimer'
    })
  }

  const toSettings = () => {
    uni.showToast({
      icon: 'none',
      title: '开发中，敬请期待'
    })
  }

  onLoad(() => {
    const saved = uni.getStorageSync('USER_AVATAR')
    const data = uni.getStorageSync('accountList');
    if (saved) {
      avatarUrl.value = saved
    }
    name.value = data[0].name
  })
</script>

<style scoped>
  /* 页面容器 */
  .profile-container {
    background-color: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 50px;
    /* 避免内容被底部 tab 挡住 */
  }

  /* 顶部导航栏 */
  .header {
    position: sticky;
    top: 0;
    z-index: 999;
    background: #46a0fc;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

  .arrow-left {
    color: white;
    font-size: 20px;
  }

  .header-title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header-right {
    width: 30px;
  }


  /* 个人信息区域 */
  .profile-section {
    background: white;
    padding: 20px;
    margin-bottom: 10px;
    text-align: left;
  }

  /* 核心修改：启用 Flex 布局 */
  .avatar-container {
    display: flex;
    /* 水平排列子元素 */
    align-items: center;
    /* 垂直居中对齐 */
    gap: 15px;
    /* 头像和文字之间的间距 */
    /* 移除原来的 margin-bottom，避免多余空白 */
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f0f0f0;
  }

  /* 移除 .user-info 的 text-align: center */
  /* 因为现在是水平布局，名字不需要单独居中 */
  .user-info {
    /* 可选：让文字区域占据剩余空间 */
    flex: 1;

  }

  .user-name {
    font-size: 20px;
    font-weight: 500;
    color: #333;
    /* 移除 margin-bottom，因为不再需要额外的垂直间距 */
    margin: 0;
    /* 重置默认外边距 */
  }

  .user-id {
    font-size: 14px;
    color: #999;
    margin: 0;
    /* 如果想显示 user-id，它会在 user-name 下方 */
  }

  /* 功能列表 */
  .function-list {
    background: white;
    margin-bottom: 10px;
  }

  .function-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .function-item:last-child {
    border-bottom: none;
  }

  .function-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
  }


  .function-title {
    font-size: 16px;
    color: #333;
    flex: 1;
  }

  .arrow {
    color: #ccc;
    font-size: 18px;
  }

  /* 底部 TabBar */
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
  .tab-item .text.active {
    color: #46a0fc;
  }
</style>