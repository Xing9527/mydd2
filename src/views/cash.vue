<template>
  <div class="cash">
      <mt-header title="申请提现">
        <router-link to="/balance" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="up">
          <didi-input label="资金余额：" v-model="balance"></didi-input>
          <didi-input label="提现金额：" v-model="cash"></didi-input>
          <didi-input label="户名：" v-model="name"></didi-input>
          <didi-input label="开户行：" v-model="bank"></didi-input>
          <didi-input label="银行账号：" v-model="id"></didi-input>
          <didi-input label="开户行地址：" v-model="adress"></didi-input>
      </div>
      <button class="btn" @click="upRequire">提交申请</button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import didiInput from "@/components/didiInput"
export default {
  components:{
      didiInput,
  },
  data(){
      return {
          balance:"15000.00元",
          cash:'',
          name:"",
          bank:"",
          id:"",
          adress:""
      }
  },
  methods:{
      upRequire(){
          MessageBox('提示', '提交申请成功！工作人员会在10000个工作日内处理！');
          this.$router.push('/cashZero')
      }
  }
}
</script>
<style scoped>
.mint-header{
    position: fixed;
    top:0;
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
}
.up{
    margin-top: 45px;
}
.btn{
        display: block;
        margin: 20px auto 45px;
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
