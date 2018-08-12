<template>
  <div class="information">
      <mt-header title="登录">
        <router-link to="/mydidi" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="top">
          <div class="header-img">
              <i class="iconfont icon-user2"></i>
          </div>
          <h2>我是蜘蛛</h2>
          <button @click="logout" class="btn">退出登录</button>
      </div>
      <router-link to="/client">
        <div class="item">
          <i class="iconfont icon-client icon"></i>
          <span>我的客户</span>
          <i class="iconfont icon-right1 "></i>
        </div>
      </router-link>
      <router-link to="/balance">
        <div class="item">
          <i class="iconfont icon-money1f icon"></i>
          <span>我的余额</span>
          <i class="iconfont icon-right1"></i>
        </div>
      </router-link>
      <router-link to="/addClient">
        <div class="item">
          <i class="iconfont icon-icon_register icon"></i>
          <span>注册客户</span>
          <i class="iconfont icon-right1"></i>
        </div>
      </router-link>
      <router-link to="/changePwd">
        <div class="item">
          <i class="iconfont icon-key icon"></i>
          <span>修改密码</span>
          <i class="iconfont icon-right1"></i>
        </div>
      </router-link>
  </div>
</template>
<script>
import myButton from "@/components/myButton.vue"
export default {
  name:"mydidi",
  components:{
      myButton
  },
  methods:{
    isLogin(){
      this.$axios.get('isLogin').then(res=> {
        if(!res.ret){
          this.$router.push('/login')
        }
      })
    },
    logout(){
      this.$axios.get('Logout',{
        code:'200',
        data:"success",
        msg:"success"
      }).then(res=>{
        if(res.ret){
          this.$router.push('/login')
        }
      })
    }
  },
  mounted(){
    this.isLogin();
  }
}
</script>
<style scoped>
.mint-header{
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
}
.top{
    padding-top:35px ;
    box-sizing: border-box;
    text-align: center;    
    width: 100%;
    height: 200px;
    background-image: url('../../static/images/11.png');
}
.header-img{
    margin: 0 auto 7px;
    width: 55px;
    height: 55px;
    text-align: center;
    border-radius: 50%;
    background: #d1e2f1;
}
.icon-user2{
  font-size:48px;
  color:#376ea7;
}
h2{
  margin-bottom: 10px;
  font-size: 18px;
  color:#eee;
}
.btn{
  width: 94px;
  height: 25px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 200;
  color: #fff;
  background: #006eb4;
}
.item{
  display: flex;
  margin: 13px auto 0;
  padding: 0 13px;
  box-sizing: border-box;
  line-height: 43px;
  width: 90%;
  height: 43px;
  border:1px solid #d8d8d8;
  border-radius: 5px;
  background: #fff;
}
a{
  text-decoration: none;
}
.icon{
  font-size:25px;
  color:#fe9200;
}
span{
  display:block;
  height: 17px;
  margin:0 12px ;
  font-size:16px;
  color:#000;
}
.icon-right1{
  float: right;
  color:#ddd;
}
</style>
