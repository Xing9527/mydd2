<template>
  <div class="file">
    <mt-header title="平台风采">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <img src="../.././static/images/04.png" alt="">
    </div>
    <div class="content">
      <h1 class="item">公司简介</h1>
      <h2>鸿鑫互联科技（北京）股份有限公司</h2>
      <p>是一个建筑工程领域万众创业者的开放性互联网电子商务服务平台----滴滴工程平台。
        我们的口号是：干工程就上滴滴。滴滴工程平台是公司核心管理平台，平台集企业资质品牌、
        CRM、线上OA办公、线上ERP、线上采购、资源整合于一体。实现创业者项目管理：
        <span>高效、降低成本、安全</span>。为创业者提供建筑行业生态链一站式服务，为自身创造千万
        价值的同时，成为平台的股东，享受平台上市资本带来数倍汇报。</p>
      <p>我们秉承"<span>专注、创新、服务、分享</span>"的企业精神，打破行业传统管理理念，为行业创造
        良好的服务环境，打造国内建筑领域各专业的孵化平台、管理平台、数据平台（目前专业有：门窗幕墙、装饰、
        钢结构等）；以全新的管理模式，完善的技术，周到的服务呈现，我们始终坚持用户至上，全心服务，创业者
        成功平台才成功的企业核心价值观。</p>
      <p class="item2">欢迎各位创业者到平台，如您对平台感兴趣或者有疑问，请您联系我们。</p>
    </div>
  </div>
</template>
<script>
export default {
  name:"file"
}
</script>
<style scoped>
.file .mint-header{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
  }
  img{
    display: block;
    margin-top:45px;
    width: 100%;
  }
  .content{
    width: 90%;
    margin: 0 auto;
  }
 .item{
    font-size: 22px;
    font-weight: 400;
    padding:15px 0 12px 0 ;
    border-bottom:1px dashed #c2c2c2;
    color:#f56603;
  }
  .item2{
    margin-bottom:38px;
  }
  h2{
    font-size:16px;
    font-weight: 400px;
    margin:22px 0 5px 0;
  }
  p{
    font-size:16px;
    font-weight: 400;
    margin-bottom:10px;
    line-height: 1.5em;
  }
  span{
    color:#f56603;
  }
</style>
