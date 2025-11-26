<template>
  <view class="disclaimer-container">


    <!-- 内容区域 -->
    <scroll-view class="content" scroll-y>

      <view class="section">
        <text class="text">
          欢迎您使用本签到软件（以下简称“本应用”）。本应用由开发者个人，旨在技术学习、项目实践与交流分享，不构成任何正式服务承诺。请您在使用前仔细阅读以下全部内容。一旦您开始使用本应用，即视为您已充分理解并同意本声明的所有条款。
        </text>
      </view>

      <view class="section" v-for="(item, index) in disclaimerList" :key="index">
        <text class="subtitle">{{ item.title }}</text>
        <text class="text">{{ item.content }}</text>
      </view>

      <view class="tip">

        <text>
          📌 特别提醒：本软件为个人学习项目，请勿将其视为正式生产级应用。若您需要稳定、安全、合规的签到系统，建议选择经过认证的企业级产品或定制开发解决方案。
        </text>
      </view>

      <view><text>—— 海轩</text></view>
    </scroll-view>
  </view>
</template>


<script setup>
  const disclaimerList = [{
      title: '1. 完全免费承诺',
      content: '本应用永久免费，不包含任何内购、订阅、广告或付费功能。开发者承诺不会以任何形式向用户收取费用。如您在使用过程中被提示付费或产生扣费，请立即停止操作，该行为非本软件官方所为，可能涉及仿冒、篡改或第三方钓鱼链接。'
    },
    {
      title: '2. 警惕非官方渠道风险',
      content: '本软件仅通过官方指定渠道（如 GitHub、HBuilderX 项目、开发者个人网站等）发布。若您通过其他平台下载到“收费版”“VIP版”“破解版”等变种版本，均与本项目无关，由此产生的财产损失或安全风险，开发者概不负责。'
    },
    {
      title: '3. 使用场景限制：仅供学习交流',
      content: '本应用为技术学习与项目练手而开发，仅供个人学习、研究和交流使用，不适用于正式管理场景。严禁将本应用于企业考勤、学校点名、绩效考核、商业运营等对准确性、可靠性有严格要求的用途。因误用或滥用导致的管理纠纷、人事争议等后果，责任由使用者自行承担。'
    },
    {
      title: '4. 功能与数据免责',
      content: '本应用提供的签到、定位、时间记录等功能为技术演示性质，可能存在延迟、误差或数据丢失。因设备时间不准、网络异常、GPS漂移等原因导致签到失败或记录偏差，开发者不承担任何责任。'
    },
    {
      title: '5. 不具备法律效力',
      content: '本应用的签到记录不具有法律效力、行政效力或官方认证效力，不可作为工作证明、学习时长认证或其他正式依据。'
    },
    {
      title: '6. 用户责任',
      content: '用户应确保设备时间准确、网络通畅，并理解本软件的技术局限性。禁止通过伪造位置、时间篡改等方式恶意使用。如发现滥用行为，开发者有权终止服务。'
    },
    {
      title: '7. 第三方服务说明',
      content: '本应用可能调用地图定位、云存储等第三方服务（如高德地图、uniCloud）。这些服务本身可能有免费额度，超出后由第三方按规则计费（如企业级调用）。⚠️ 若您作为开发者自行接入并配置了需付费的第三方服务，由此产生的费用由您自行承担，与本软件无关。'
    },
    {
      title: '8. 隐私保护',
      content: '本应用尊重用户隐私，签到数据默认仅存储于本地设备，不会上传或用于商业变现。因设备丢失、账户泄露等不可抗力造成的隐私风险，开发者不承担赔偿责任。'
    },
    {
      title: '9. 软件更新与终止',
      content: '本应用为非商业化项目，开发者可能随时停止维护或下架应用，恕不另行通知。建议用户自行备份重要数据。'
    },
    {
      title: '10. 免责条款',
      content: '在法律允许的最大范围内，开发者不对以下情况承担责任：应用无法使用、数据丢失、功能错误；因使用本应用导致的工作延误、经济损失；用户因依赖本应用做出错误决策所引发的后果。'
    },
    {
      title: '11. 法律适用与争议解决',
      content: '本声明适用中华人民共和国法律。如因本应用引发争议，双方应友好协商解决；协商不成的，任何一方可向开发者所在地人民法院提起诉讼。'
    },
    {
      title: '12. 其他重要提示',
      content: '本项目为开源或学习性质，欢迎技术交流，但请勿用于非法或牟利用途。未经许可，禁止对本应用进行二次打包、冒名发布或商业化售卖。开发者保留对本声明的修改权与最终解释权。'
    }
  ];

  // 返回上一页
  const goBack = () => {
    uni.navigateBack();
  };
</script>

<style lang="scss" scoped>
  .disclaimer-container {
    height: 100vh;
    background-color: #f8f8f8;
    position: relative;
  }

  .navbar {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 15px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .nav-back {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back-icon {
    font-size: 20px;
    color: #007aff;
    font-weight: bold;
  }

  .nav-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    flex: 1;
    text-align: center;
  }

  .content {
    flex: 1;
    padding: 15px;
    height: calc(100vh - 44px);
  }

  .section {
    margin-bottom: 20px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    display: block;
    margin-bottom: 10px;
    text-align: center;
  }

  .subtitle {
    font-size: 15px;
    font-weight: bold;
    color: #d40000;
    display: block;
    margin-bottom: 8px;
  }

  .text {
    font-size: 14px;
    line-height: 22px;
    color: #333;
    display: block;
    padding-right: 20px;
  }

  .tip {
    font-size: 14px;
    color: #d40000;
    font-weight: bold;
    line-height: 24px;
    padding-right: 20px;
  }

  .author {
    margin-top: 20px;
    text-align: center;
    font-size: 13px;
    color: #666;
  }
</style>