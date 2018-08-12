<template>
  <div class="change-pwd">
      <mt-header title="修改密码">
        <router-link to="/mydidi" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="change">
        <didiInput label="旧密码：" v-model="oldPwd" type="password"></didiInput>
        <didiInput label="新密码：" v-model="newPwd" type="password"></didiInput>
        <didiInput label="确认新密码：" v-model="confirmPwd" type="password"></didiInput>
        <button class="btn" @click="changePwd">确认修改</button>
      </div>
  </div>
</template>
<script>
import didiInput from "@/components/didiInput"
import { MessageBox } from 'mint-ui';
export default {
  name:'change-pwd',
  components:{
      didiInput
  },
  data(){
      return {
          oldPwd:'',
          newPwd:'',
          confirmPwd:''
      }
  },
  methods:{
      changePwd(){
          this.$axios.post('ChangePwd',{
              pwd:this.oldPwd,
              newPwd:this.newPwd
          }).then(res=>{
              if(this.newPwd!=this.confirmPwd){
                  MessageBox('提示', '两次输入的密码不一样！');
              }else if(this.oldPwd == this.newPwd){
                  MessageBox('提示', '新密码不能和旧密码是同一个！');
              }else if(res.ret){
                  MessageBox('提示', '密码修改成功，请重新登录！');
                  this.$router.push('/login')
              }
          })
      },
      isLogin(){
      this.$axios.get('isLogin').then(res=> {
        if(!res.ret){
          MessageBox('提示', '请先登录！');
          this.$router.push('/login')
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
    position: fixed;
    top: 0;
    
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
}
.change{
    margin-top: 45px;
}
.btn{
        display: block;
        margin: 10px auto;
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
</style>
