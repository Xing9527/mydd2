<template>
  <div class="balance">
      <mt-header title="账户余额">
        <router-link to="/mydidi" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="num">
          <span class="int">￥15000</span>
          <span class="float">.00</span>
      </div>
      <div class="up">
          <myButton value="申请提现" to="/cash" id="btn"></myButton>
      </div>
  </div>
</template>
<script>
import myButton from "@/components/myButton"
import { MessageBox } from 'mint-ui';
export default {
  name:"",
  components:{
      myButton
  },
  methods:{
    isLogin(){
      this.$axios.get('isLogin').then(res=> {
        console.log(res)
        if(!res.ret){
          MessageBox('提示', '请先登录！');
          this.$router.push('/login')
        }
      })
    },
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
.num{
    padding: 30px 0 60px;
    text-align: center;
    background: #fff;
    color:#ed6c6c;
}
.int{
    font-size: 30px;
}
.float{
    font-size:16px;
}
.up{
    margin-top: 15px;
    padding: 20px 0;
    background: #fff;
}

</style>
<style>
#btn{
    width: 85%;
}
</style>

