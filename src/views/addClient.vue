<template>
  <div class="add-client">
      <mt-header title="注册客户">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="input">
          <didi-input label="客户姓名：" v-model="userName"></didi-input>
          <didi-input label="手机号：" v-model="phoneNum" type="tel"></didi-input>
          <didi-input label="身份证号：" v-model="id" type="tel"></didi-input>
          <label class="select">
            <span class="label-font">用户类型：</span>
            <select  v-model="userType">
                <option value="0">正式客户</option>
                <option value="1">非正式客户</option>
            </select>
          </label>
          <button class="btn" @click="addClient">完成注册</button>
      </div>
  </div>
</template>
<script>
import didiInput from "@/components/didiInput"
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name:'add-client',
  components:{
      didiInput
  },
  data(){
      return {
          userName:"",
          phoneNum:"",
          id:"",
          userType:""
      }
  },
  methods:{
      isLogin(){
      this.$axios.get('isLogin').then(res=> {
        if(!res.ret){
          MessageBox('提示', '请先登录！');
          this.$router.push('/login')
        }
      })
    },
    addClient(){
        this.$axios.post('addClient',{
            name:this.userName,
            phone:this.phoneNum,
            idNum:this.id,
        }).then(res=>{
            if(res.ret){
                Toast('添加成功');
                this.$router.push('/client')
            }
        })
    }
  },
  mounted(){
      this.isLogin()
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
 select{
    background: transparent;
    width: 240px;
    padding:  18px 0;
    font-size: 15px;
    -webkit-appearance: none;
    background: #fff;
  }
.select {
  display: block;
  width: 100%;  
  background: #fff url(/static/images/down.png) no-repeat;
  background-position: 100% 50%;
}
.label-font {
    display: inline-block;
    width: 107px;
    text-align: right;
    font-size: 16px;
    color: #000;
}
.btn{
        display: block;
        margin: 15px auto;
        width: 90%;
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
</style>

