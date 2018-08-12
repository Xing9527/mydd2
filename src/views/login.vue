<template>
  <div>
      <mt-header title="登录">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="user-header">
          <i class="iconfont icon-user"></i>
      </div>
        <myInput label="用户名：" v-model="userName" type="tel"></myInput>
        <myInput label="密码："  type="password" v-model="pwd"></myInput>
        <button @click="login" class="btn">登录</button>
        <myButton value="注册" id="register" to="/register"></myButton>  
  </div>
</template>
<script>
import myInput from "@/components/myInput.vue"
import myButton from "@/components/myButton.vue"
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name:'login',
  data(){
      return {
          userName:'',
          pwd:''
      }
  },
  components:{
      myInput,
      myButton
  },
  methods:{
      login(){
          this.$axios.post('Login',{
              phone:this.userName,
              pwd:this.pwd
          }).then(res=>{
              if(res.ret){
                Toast('登录成功');
                this.$router.push('/mydidi')
              }else{
           MessageBox('提示', '账号或密码输入错误！');
        }
          })
      }
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
    .user-header {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin: 38px 0 18px 0;
        text-align: center;
    }
    .user-header .icon-user {
        font-size: 45px;
        width: 65px;
        color: #888;
        height: 65px;
        border: 3px solid #fff;
        box-sizing: border-box;
        padding-top: 6px;
        border-radius: 50%;
        box-shadow: 0 0 4px 4px rgba(0,0,0,.2);
    }
    #login{
        margin: 18px auto 14px;
    }
    #register{
        background: #fff;
        color:#006eb4;
    }
    .btn{
        display: block;
        margin: 15px auto;
        width: 95%;
        height: 40px;
        color:#fff;
        font-size: 18px;
        text-align: center;
        line-height: 40px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #006eb4;
    }
    a{
        text-decoration: none;
    }
    
</style>
