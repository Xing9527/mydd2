<template>
  <div class="home">
    <mt-header fixed title="首页" ></mt-header> 
    <div class="wrap-img">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgs" :key="item._id">
          <img :src="item.img" alt="">
        </mt-swipe-item>
        <!-- <mt-swipe-item>
          <img src="static/images/13.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="static/images/14.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="static/images/15.png" alt="">
        </mt-swipe-item> -->
      </mt-swipe>
    </div>
    <div class="contianer">
      <div class="item">
        <router-link to="/project" class="item-child">
          <span class="icon" style="background: #fe575a;  ">
            <i class="iconfont icon-project24"></i>
          </span>
            <br>          
          <span class="text">创业项目</span>
        </router-link>
        <router-link to="/file" class="item-child">
          <span class="icon" style="background: #fd8f37;  ">
            <i class="iconfont icon-flower"></i>
          </span>
            <br>          
          <span class="text" >平台风采</span>
        </router-link>
        <router-link to="/apply" class="item-child">
          <span class="icon" style="background: #6cc142;  ">
            <i class="iconfont icon-cc-shield"></i>
          </span>
            <br>          
          <span class="text">报名流程</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/client" class="item-child">
          <span class="icon" style="background: #41bee7;  ">
            <i class="iconfont icon-kehu"></i>
          </span>
            <br>          
          <span class="text">客户管理</span>
        </router-link>
        <router-link to="/balance" class="item-child">
          <span class="icon" style="background: #f5c132;  ">
            <i class="iconfont icon-money"></i>
          </span>
            <br>          
          <span class="text">财务管理</span>
        </router-link>
        <router-link to="/news" class="item-child">
          <span class="icon" style="background: #7b7bd6;  ">
            <i class="iconfont icon-news"></i>
          </span>
            <br>          
          <span class="text">新闻公告</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/case" class="item-child">
          <span class="icon" style="background: #bc7ad6;  ">
            <i class="iconfont icon-houseplant"></i>
          </span>
            <br>          
          <span class="text">工程案例</span>
        </router-link>
        <router-link to="/changePwd" class="item-child">
          <span class="icon" style="background: #0e84e5;  ">
            <i class="iconfont icon-lock1"></i>
          </span>
            <br>          
          <span class="text">修改密码</span>
        </router-link>
        <router-link to="/addClient" class="item-child">
          <span class="icon" style="background: #00b3b2;  ">
            <i class="iconfont icon-personadd"></i>
          </span>
            <br>          
          <span class="text">注册客户</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name:"homepage",
  data() {
    return {
    imgs:[]      
    }
  },
  methods:{
    getSwiper() {
      this.$axios.get('getSwiper').then(res => {
        if(res.ret == true) {
          this.imgs = res.data
        }
      })
    }
  },
  created() {
    this.getSwiper()
  }
}
</script>
<style>
  .home .mint-header{
    height: 45px;
    background: #006eb8;
    font-size:20px;
  }
</style>
<style scoped>
.wrap-img{
  margin: 45px 0 0 0;
  height: 212px;
}
.wrap-img img{
  display: block; 
  width: 100%;
  height: 212px;
}
.contianer{
  margin-bottom:20px;
}
a{
  text-decoration: none;
}
.item{
  display: flex;
  justify-content:space-around;
  margin-bottom:15px;
  padding:10px 20px 25px;
  background: #fff;
  border-top:1px solid #d6d6d6;
  border-bottom:1px solid #d6d6d6;
}

.item-child{
  display:block;
  text-align:center;
}
.text{
  display: inline-block;
  margin-top:5px;
  color:#000;
}
.icon{
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align:center;
  border-radius:50%;
}
i{
  font-size:25px;
  color:#fff;
  line-height:50px;
}
</style>

