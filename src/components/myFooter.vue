<template>
  <div class="myfooter">
      <router-link to="/" :class="{active:$route.name==='homepage'}">
          <i class="iconfont icon-home"></i>
          <h2>首页</h2>
      </router-link>
      <router-link to="/project" :class="{active:$route.name==='project'||$route.name==='diamond'||$route.name==='gold'||$route.name==='silver'}">
          <i class="iconfont icon-project"></i>
          <h2>创业项目</h2>
      </router-link>
      <router-link to="/apply" :class="{active:$route.name==='apply'}">
          <i class="iconfont icon-xunhuan"></i>
          <h2>报名流程</h2>
      </router-link>
      <router-link to="/file" :class="{active:$route.name==='file'}">
          <i class="iconfont icon-file"></i>
          <h2>平台风采</h2>
      </router-link>
      <router-link to="/mydidi" :class="{active:$route.name==='mydidi'||$route.name==='login'}">
          <i class="iconfont icon-LC_icon_user_fill_add"></i>
          <h2>我的滴滴</h2>
      </router-link>
  </div>
</template>
<script>
export default {
  name:"my-footer"
}
</script>
<style scoped>
  .myfooter{
    display:flex;
    /* justify-content: space-around; */
    position: fixed;
    left:0;
    bottom:0;
    right: 0;
    padding: 5px 0;
    text-align: center;
    height: 45px;
    background: #333;
  }
  i{
    font-size:24px;
  }
  h2{
    font-size:12px;
    font-weight: 400;
  }
  a{
    width: 20%;
    color:#fff;    
    text-decoration:none;
  }
  .myfooter .active{
    color:#f00;
  }
</style>


