<!-- pages/location-select/location-select.vue -->
<template>
  <view class="container">
    <button @click="selectLocation" class="select-btn">
      选择位置
    </button>

    <view v-if="location" class="result">
      <text class="label">位置名称：</text>
      <text class="value">{{ location.name }}</text>

      <text class="label">纬度：</text>
      <text class="value">{{ location.latitude }}</text>

      <text class="label">经度：</text>
      <text class="value">{{ location.longitude }}</text>

      <text class="label">结果：</text>
      <text class="value">{{ xxtmessage }}</text>
    </view>

    <view v-else class="placeholder">
      尚未选择位置
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

  // 响应式变量：存储选中的位置信息
  const location = ref(null)
  const activeId = ref('')
  const xxtmessage = ref('')


  const locationsign = () => {

    console.log('最终确认参数:', activeId.value)
    const coo = uni.getStorageSync('CHAOXING_COOKIE');
    console.log(coo)
    if (!activeId) {
      uni.showToast({
        title: 'activeId 不能为空',
        icon: 'none'
      });
      return;
    }

    const locationurl =
      `https://mobilelearn.chaoxing.com/pptSign/stuSignajax?address=${location.value.name}&activeId=${activeId.value}&latitude=${location.value.latitude}&longitude=${location.value.longitude}&fid=0&appType=15&ifTiJiao=1`;

    console.log('准备签到')
    return new Promise((resolve) => {
      uni.request({
        url: locationurl,
        method: 'GET',
        header: {
          'Cookie': coo
        },
        success: (res) => {
          const message = res.data || '无数据'
          xxtmessage.value = res.data
          console.log(locationurl)
          console.log(message)
          resolve({
            success: true,
            message,
          });
        },
        fail: (err) => {
          const errorMsg = `请求失败: ${err.errMsg}`;
          resolve({
            success: false,
            error: errorMsg
          });
        }
      });
    });
  };

  function gaodeToBaidu(gaodeLng, gaodeLat, success, fail) {
    uni.request({
      url: 'https://api.map.baidu.com/geoconv/v1/',
      data: {
        coords: `${gaodeLng},${gaodeLat}`,
        from: 3, // GCJ-02（高德）
        to: 5, // BD-09（百度）
        ak: 'NI8sc0M37VtXv5UWFfYm6K40PKCQIzYh'
      },
      success: (res) => {
        if (res.data.status === 0) {
          const bd = res.data.result[0];
          success({
            lat: bd.y,
            lng: bd.x
          });
        } else {
          fail('转换失败: ' + res.data.status);
        }
      },
      fail: (err) => {
        fail('请求失败: ' + JSON.stringify(err));
      }
    });
  }

  const selectLocation = () => {
    uni.chooseLocation({
      success: (res) => {
        console.log('选择的位置：', res);

        const gcjLng = res.longitude; // 高德经度（GCJ-02）
        const gcjLat = res.latitude; // 高德纬度（GCJ-02）

        // 使用你的百度 API 转换函数
        gaodeToBaidu(gcjLng, gcjLat, (bdCoord) => {
          // 转换成功，更新 location
          location.value = {
            name: res.name,
            address: res.address,
            latitude: bdCoord.lat, // 百度纬度（BD-09）
            longitude: bdCoord.lng // 百度经度（BD-09）
          };

          console.log('✅ 转换后的百度坐标：', bdCoord.lat, bdCoord.lng);
          locationsign(); // 执行签到等后续操作
        }, (err) => {
          // 转换失败
          uni.showToast({
            title: '坐标转换失败',
            icon: 'none',
            duration: 2000
          });
          console.error('坐标转换失败：', err);
        });
      },
      fail: (err) => {
        if (!err.errMsg.includes('cancel')) {
          uni.showToast({
            title: '获取位置失败',
            icon: 'none',
            duration: 2000
          });
          console.error('选择位置失败：', err);
        } else {
          console.log('用户取消选择');
        }
      }
    });
  };
  onLoad((options) => {

    // 安全提取参数（URL 参数都是字符串）
    activeId.value = options.activeid || ''
    console.log('监听页面参数:', activeId.value)
  })
</script>

<style scoped>
  .container {
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .select-btn {
    background-color: #007aff;
    color: #ffffff;
    font-size: 16px;
    border-radius: 8px;
    padding: 12px 0;
    margin-bottom: 20px;
  }

  .result {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    font-size: 14px;
    line-height: 2;
  }

  .label {
    font-weight: bold;
    color: #333;
    display: block;
    margin-top: 8px;
  }

  .value {
    color: #555;
    margin-left: 8px;
  }

  .placeholder {
    color: #999;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
  }
</style>