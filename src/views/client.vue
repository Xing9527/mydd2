<template>
  <div class="news">
    <mt-header title="客户管理">
      <router-link to="/mydidi" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul>
        <li v-for="item in items" :key="item.id">
                <h2>客户姓名：{{item.name}}</h2>
                <p>联系电话：{{item.phone}}</p>
                <p>身份证号：{{item.idNum}}</p>
                <p>添加时间：{{item.createTime}}</p>
                <p>客户状态：正式客户</p>
                <div class="detail"><img src="static/images/09.png" alt=""></div>
        </li>
    </ul>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
  name:'client',
  data(){
      return {
         items:[],
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
      getList(){
           this.$axios.get('getClient').then(res=> {
            this.items = res.data
        })
      }
  },
  mounted(){
      this.getList(),
      this.isLogin()
  }
}
</script>
<style scoped>
 .mint-header{
    position: fixed;
    top:0;
    z-index:998;
    width: 100%;
    height: 45px;
    background: #006eb8;
    font-size:20px;
  }
  ul{
      margin:45px 0;
  }
  li{
      position: relative;
      overflow:initial;
      margin:20px 0 0 20px;
      background: #fff;
      padding: 10px 15px 5px;
      box-sizing: border-box;
      width: 70%;
      border-left: 3px solid #006eb8;
      border-top:1px solid #cfcfcf;
      box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3);
  }
  h2{
      margin-bottom: 7px;
      font-weight: 500;
      color:#000;
  }
  p{
      margin-bottom: 7px;
      color:#b1b1b1;
  }
  img{
      height: 60px;
  }
  .detail{
      position: absolute;
      right: -90px;
      bottom:25%;
      width: 90px;
  }
</style>
