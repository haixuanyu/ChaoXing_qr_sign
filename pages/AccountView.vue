<template>
  <view class="account-view">

    <!-- 账号列表 -->
    <view class="account-list">
      <view v-if="accountList.length === 0" class="empty-state">
        <text>暂无账号</text>
        <view></view>
        <text>提示：首个账号为主账号</text>
        <view></view>
        <text>用于获取课程与活动信息</text>
      </view>

      <view v-for="account in accountList" :key="account.id" class="account-item" @click="showAccountDetail(account)">
        <text class="account-username">{{ account.name }}</text>
        <view class="item-buttons">
          <!-- 新增：修改按钮 -->
          <button class="edit-item-btn" @click.stop="showEditDialog(account)">
            修改
          </button>
          <button class="delete-btn" @click.stop="deleteAccount(account)">
            删除
          </button>
        </view>
      </view>
    </view>

    <!-- 添加账号按钮 -->
    <view class="add-button">
      <button class="add-btn" @click="showAddDialog">添加账号</button>
    </view>

    <!-- 添加账号弹窗 -->
    <view v-show="addDialogVisible" class="popup-overlay">
      <view class="popup add-popup" @click.stop>
        <view class="popup-header">
          <text class="popup-title">{{ isEditing ? '编辑账号' : '添加账号' }}</text>
          <text class="popup-close" @click="closeAddDialog">×</text>
        </view>
        <view class="popup-content">
          <view class="form-group">
            <text class="form-label">昵称</text>
            <input v-model="newAccount.name" class="form-input" placeholder="请输入昵称（随便取）" type="text"
              :focus="inputFocus" />
          </view>
          <view class="form-group">
            <text class="form-label">手机号</text>
            <input v-model="newAccount.phone" class="form-input" placeholder="请输入手机号" type="number" maxlength="11"
              @input="handlePhoneInput" :disabled="isEditing" />
          </view>
          <view class="form-group">
            <text class="form-label">密码</text>
            <input v-model="newAccount.password" class="form-input" placeholder="请输入密码" password type="text"
              :disabled="isEditing" />
          </view>
          <view class="form-actions">
            <button class="submit-btn" @click="submitAccount">
              {{ isEditing ? '更新' : '提交' }}
            </button>
          </view>
        </view>
      </view>
    </view>

    <!-- 账号详情弹窗 -->
    <view v-show="detailDialogVisible" class="popup-overlay" @click="detailDialogVisible = false">
      <view class="popup detail-popup" @click.stop>
        <view class="popup-header">
          <text class="popup-title">账号详情</text>
          <text class="popup-close" @click="detailDialogVisible = false">×</text>
        </view>
        <view class="popup-content">
          <view class="detail-row">
            <text class="detail-label">ID</text>
            <text class="detail-value">{{ selectedAccount.id }}</text>
          </view>
          <view class="detail-row">
            <text class="detail-label">用户名</text>
            <text class="detail-value">{{ selectedAccount.name }}</text>
          </view>
          <view class="detail-row">
            <text class="detail-label">手机号</text>
            <text class="detail-value">{{ selectedAccount.phone }}</text>
          </view>
          <view class="detail-row">
            <text class="detail-label">创建时间</text>
            <text class="detail-value">{{ selectedAccount.createTime }}</text>
          </view>
        </view>
        <view class="popup-footer">
          <button class="edit-btn" @click="editAccount">编辑</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import CryptoJS from 'crypto-js'

  // 账号列表（响应式）
  const accountList = ref([]);

  // 弹窗控制
  const addDialogVisible = ref(false);
  const detailDialogVisible = ref(false);
  const selectedAccount = ref({});
  const newAccount = ref({
    name: '',
    phone: '',
    password: ''
  });
  const isEditing = ref(false); // 是否处于编辑状态
  const inputFocus = ref(false); // 控制输入框自动聚焦
  const editingAccountId = ref(null); // 记录当前编辑的账号ID


  function encryptByAES(message) {
    const chaoxingkey = 'u2oh6Vu^HWe4_AES'
    const utf8Key = CryptoJS.enc.Utf8.parse(chaoxingkey)
    const utf8Iv = CryptoJS.enc.Utf8.parse(chaoxingkey)

    const encrypted = CryptoJS.AES.encrypt(message, utf8Key, {
      iv: utf8Iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    return encrypted.ciphertext.toString(CryptoJS.enc.Base64)
  }


  const login = (username, password) => {
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
          'independentNameId': '0',
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        success: (res) => {
          const data = res.data;
          console.log(data['status'])
          const setCookie = res.cookies;
          if (!setCookie || setCookie.length === 0) {
            return reject(data['status']);
          }

          const cookieStr = setCookie
            .map(cookie => {
              const trimmed = cookie.trim();
              const end = trimmed.indexOf(';');
              return end > -1 ? trimmed.substring(0, end) : trimmed;
            })
            .filter(Boolean)
            .join('; ');
          console.log(accountList.value.length)
          if (accountList.value.length == 0) {
            uni.setStorageSync('CHAOXING_COOKIE', cookieStr);
          }
          resolve(data['status']);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };

  // 👉 从本地存储加载数据
  const loadFromStorage = () => {
    try {
      const data = uni.getStorageSync('accountList');
      if (data && data.length) {
        accountList.value = data;
      } else {
        accountList.value = [];
        saveToStorage();
      }
    } catch (e) {
      console.error('读取本地数据失败:', e);
    }
  };

  // 👉 保存到本地存储
  const saveToStorage = () => {
    try {
      uni.setStorageSync('accountList', accountList.value);
    } catch (e) {
      console.error('保存数据失败:', e);
    }
  };

  // 返回
  const goBack = () => {
    uni.navigateBack({
      delta: 1
    });
  };

  // 显示添加弹窗
  const showAddDialog = () => {
    isEditing.value = false;
    editingAccountId.value = null;
    newAccount.value = {
      name: '',
      phone: '',
      password: ''
    };
    addDialogVisible.value = true;
    inputFocus.value = true;
  };

  // ✅ 新增：显示修改弹窗（仅修改昵称）
  const showEditDialog = (account) => {
    uni.vibrateShort()
    isEditing.value = true;
    editingAccountId.value = account.id;
    newAccount.value = {
      name: account.name,
      phone: account.phone,
      password: account.password
    };
    addDialogVisible.value = true;
    inputFocus.value = true;
  };

  // 编辑账号（从详情弹窗进入）
  const editAccount = () => {
    uni.vibrateShort()
    detailDialogVisible.value = false;
    showEditDialog(selectedAccount.value);
  };

  // 关闭添加弹窗
  const closeAddDialog = () => {
    addDialogVisible.value = false;
  };


  // 提交账号（添加或更新）
  const submitAccount = async () => {
    const {
      name,
      phone,
      password
    } = newAccount.value;

    if (!name || !phone || !password) {
      uni.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    // ✅ 如果是编辑模式，且只修改昵称，则不需要重新登录验证
    if (isEditing.value && editingAccountId.value) {
      // 检查昵称是否重复（排除当前账号）
      const duplicate = accountList.value.some(acc =>
        acc.name === name && acc.id !== editingAccountId.value
      );

      if (duplicate) {
        uni.showToast({
          title: '用户名已存在',
          icon: 'none'
        });
        return;
      }

      // 更新账号信息
      const index = accountList.value.findIndex(acc => acc.id === editingAccountId.value);
      if (index > -1) {
        accountList.value[index].name = name;
        // 如果手机号或密码也改了，可以选择是否重新验证登录
        // 这里简化处理，只更新昵称
        saveToStorage();
        uni.showToast({
          title: '修改成功',
          icon: 'success'
        });
      }
      addDialogVisible.value = false;
      return;
    }

    // 添加新账号时需要登录验证
    let loginSuccess = false;
    try {
      const result = await login(phone, password);
      console.log(result)
      if (result === false) {
        uni.showToast({
          title: '登录验证失败，短时间只能请求5次请注意',
          icon: 'none'
        });
        return;
      }
      loginSuccess = true;
    } catch (error) {
      uni.showToast({
        title: '登录测试失败',
        icon: 'none'
      });
      console.error('登录验证出错:', error);
      return;
    }

    if (!loginSuccess) return;

    // 添加新账号
    if (accountList.value.some(acc => acc.name === name)) {
      uni.showToast({
        title: '用户名已存在',
        icon: 'none'
      });
      return;
    }

    const account = {
      id: Date.now(),
      name,
      phone,
      password,
      createTime: new Date().toLocaleDateString(),
    };
    accountList.value.push(account);
    uni.showToast({
      title: '添加成功',
      icon: 'success'
    });

    saveToStorage();
    addDialogVisible.value = false;
  };


  // 显示详情
  const showAccountDetail = (account) => {
    selectedAccount.value = account;
    detailDialogVisible.value = true;
  };

  const deleteAccount = (row) => {
    uni.vibrateLong()
    uni.showModal({
      title: '确认删除',
      content: `确定要删除账号 "${row.name}" 吗？`,
      success: (res) => {
        if (res.confirm) {
          const index = accountList.value.findIndex(item => item.id === row.id);
          if (index > -1) {
            accountList.value.splice(index, 1);
            saveToStorage();
            uni.showToast({
              title: '删除成功',
              icon: 'success'
            });
          }
        }
      }
    });
  };

  // 页面加载时初始化数据
  onMounted(() => {
    loadFromStorage();
    console.log('当前账号列表:', accountList.value);
  });
</script>

<style scoped>
  .account-view {
    background-color: #f7f8fa;
    min-height: 100vh;
    padding-bottom: 20px;
  }

  /* 账号列表 */
  .account-list {
    margin: 16px;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  }

  .account-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .account-item:last-child {
    border-bottom: none;
  }

  .account-username {
    font-size: 16px;
    color: #323233;
    flex: 1;
  }

  /* ✅ 新增：按钮容器 */
  .item-buttons {
    display: flex;
    gap: 8px;
  }

  .delete-btn {
    background-color: #ee0a24 !important;
    color: #fff;
    font-size: 14px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    line-height: 1;
    font-weight: 500;
  }

  /* ✅ 新增：修改按钮样式 */
  .edit-item-btn {
    background-color: #ff976a !important;
    color: #fff;
    font-size: 14px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    line-height: 1;
    font-weight: 500;
  }

  .empty-state {
    text-align: center;
    padding: 40px 0;
    color: #969799;
    font-size: 16px;
  }

  /* 添加按钮 */
  .add-button {
    padding: 16px;
  }

  .add-btn {
    background-color: #1989fa;
    color: #fff;
    font-size: 16px;
    border-radius: 999px;
    height: 48px;
    line-height: 48px;
  }

  /* 弹窗遮罩 */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 999;
  }

  .popup {
    width: 100%;
    background-color: #fff;
    border-radius: 16px 16px 0 0;
    max-height: 80vh;
    overflow-y: auto;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .popup-title {
    font-size: 18px;
    color: #323233;
    font-weight: 500;
  }

  .popup-close {
    font-size: 24px;
    color: #969799;
  }

  .popup-content {
    padding: 16px;
  }

  /* 表单 */
  .form-group {
    margin-bottom: 16px;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #323233;
  }

  .form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ebedf0;
    border-radius: 8px;
    font-size: 16px;
    background-color: #f7f8fa;
  }

  .form-input:focus {
    border-color: #1989fa;
  }

  .form-input:disabled {
    background-color: #ebedf0;
    color: #969799;
  }

  .form-actions {
    margin-top: 24px;
  }

  .submit-btn {
    background-color: #1989fa;
    color: #fff;
    font-size: 16px;
    border-radius: 999px;
    height: 48px;
  }

  /* 详情弹窗 */
  .detail-row {
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .detail-row:last-child {
    border-bottom: none;
  }

  .detail-label {
    width: 80px;
    color: #646566;
    font-size: 15px;
  }

  .detail-value {
    flex: 1;
    color: #323233;
    font-size: 15px;
  }

  /* 底部操作按钮 */
  .popup-footer {
    padding: 16px;
    border-top: 1px solid #f0f0f0;
  }

  .edit-btn {
    background-color: #ff976a;
    color: #fff;
    font-size: 16px;
    border-radius: 999px;
    height: 48px;
  }
</style>