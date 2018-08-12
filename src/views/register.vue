<template>
  <div class="register">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="input-wrap">
      <myInputRegister label="客户姓名" v-model="userName" id="input"></myInputRegister>
      <myInputRegister label="手机号" v-model="phoneNumber" id="input" type="tel"></myInputRegister>
      <myInputRegister label="密码" v-model="pwd" id="input" type="password"></myInputRegister>
      <myInputRegister label="身份证号" v-model="id" id="input" type="tel"></myInputRegister>
      <label class="select">
        <span class="label-font">性别</span>
          <select  v-model="sex">
              <option value="0">女</option>
              <option value="1">男</option>
          </select>
        </label>
      <label class="select">
        <span class="label-font">客户类型</span>
          <select  v-model="clientType">
              <option value="0">钻石会员</option>
              <option value="1">金牌会员</option>
              <option value="2">银牌会员</option>
          </select>
        </label>
        <label class="select">
        <span class="label-font">用户类型</span>
          <select  v-model="userType">
              <option value="0">员工</option>
              <option value="1">客户</option>
          </select>
        </label>
      <div class="item">
        <myInputRegister label="验证码" v-model="authCode" id="auth"></myInputRegister>
        <img class="auth-img" src="../.././static/images/timg.jpg">
      </div>
      <div class="item">
        <myInputRegister label="短信验证" v-model="shortMsg" id="auth" type="tel"></myInputRegister>
        <button class="auth-btn">获取验证码（60）</button>
      </div>
        <label class="dell">
          <input type="checkbox" name="check" value="1">
          <div class="icon">
            <p></p>
          </div>
          <span>我已经同意以下条款</span>
          <a href="#">《用户使用协议》</a>
        </label>
    </div>
    <button @click="updata" class="btn">注册</button>

  </div>
</template>
<script>
import myInputRegister from "@/components/myInput-register"
import myButton from "@/components/myButton"
import mySelect from "@/components/mySelect"
import { MessageBox } from 'mint-ui';
export default {
  name:'register',
  data(){
    return {
      userName:'',
      phoneNumber:'',
      pwd:'',
      id:'',
      authCode:'',
      shortMsg:'',
      sex:'',
      clientType:'',
      userType:""
    }
  },
  components:{
    myInputRegister,
    myButton,
    mySelect
  },
  methods:{
    updata(){
      this.$axios.post('Register',{
        pwd:this.pwd,
        sex:this.sex,
        type:this.clientType,
        idNum:this.id,
        phone:this.phoneNumber,
        name:this.userName,
        userType:this.userType
      }).then(res=>{
        console.log(res)
        if(res.ret){
          MessageBox('提示', '注册成功，请登录！');
          this.$router.push("/login")
        }
      })
    }
  }

}
</script>
<style scoped>
.mint-header{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
  }
  .input-wrap{
    padding-top: 45px;
  }
  #input{
    margin-top: 10px;
    padding: 0 10px;
  }

#auth{
  width: 60%;
}
.item{
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px;
  width: 95%;
}
.auth-img,.auth-btn{
  display: block;
  width: 39%;
  height: 33px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}
  .auth-btn{
    border: none;
    background: #ff6700;
    color: #fff;
    font-size: 14px;
  }
  .dell{
    display: block;
    width: 95%;
    margin: 0 auto 15px;
  }
  select{
    background: transparent;
    width: 220px;
    padding: 5px 10px;
    font-size: 15px;
    height: 29px;
    -webkit-appearance: none;
     background: #fff;
  }
  .select {
  display: block;
  margin: 10px auto;
  height: 33px;
  width: 95%;
  line-height: 33px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 5px;
  background: #fff url(/static/images/down.png) no-repeat;
  background-position: 100% 50%;
  border: 1px solid #ddd;
}
  .label-font {
  display: inline-block;
  padding-right: 10px;
  text-align: right;
  width: 80px;
  height: 33px;
  color:#000;
  font-size:16px;
  font-weight: 500;
  border-right:  1px solid #ddd;
}
.btn{
    display: block;
    margin: 0 auto;
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
.icon{
  display: inline-block;
  width: 18px;
  height:18px;
  border:1px solid #6f7271;
}
/*.icon:hover{*/
  /*background: #006eb4;*/
/*}*/
.icon p{
  transform: rotateZ(45deg) translateY(-4px) translateX(2px);
  width: 8px;
  height: 13px;
  border: 2px solid #f5f5f5;
  border-top:none;
  border-left:none;
}
.dell{
  font-size: 14px;
}
.dell input:checked + .icon{
  background: #006eb4;
  transition: background .3s ease;
}
#app .myfooter{
  display: none;
}
</style>
<style>
#auth input{
  width: 40%;
}
</style>



