<template>
  <div class="tetail">
    <mt-header title="新闻公告">
        <router-link to="/news" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <h2 v-html="arr.title">习近平访美前瞻</h2>
    <p v-text="arr.createTime">2015年09月11日 15:50</p>
    <img :src="arr.img" alt="">
    <div v-html="arr.content" class="content"></div>
  </div>
</template>
<script>
import axios from "axios"
 
export default {
  name:'news-detail',
  data(){
      return {
          arr:{},
          newstime:{}
      }
  },
  methods:{
      getData(){
          var that = this;          
          this.$axios.get("getNews",{id:this.$route.query.id})
            .then(function (res) {
                that.arr = res.data[0];
                // var time=res.data[0].createtime;
                // var newtime=time*1000;
                // function gettime(t){
                //     var _time=new Date(t);
                //     var   year=_time.getFullYear();//2017
                //     var   month=_time.getMonth()+1;//7
                //     var   date=_time.getDate();//10
                //     var   hour=_time.getHours();//10
                //     var   minute=_time.getMinutes();//56
                //     var   second=_time.getSeconds();//15
                //     return   year+"年"+month+"月"+date+"日   "+hour+":"+minute+":"+second;//这里自己按自己需要的格式拼接
                // }
                // that.arr.createtime = gettime(newtime);
            })
            .catch(function (err) {
                console.log(err);
            });
        },
        
  },
    mounted(){
        this.getData()
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
  .tetail{
      margin: 0 auto;
      width: 85%;
  }
  h2{
      margin: 65px 0 4px;
      font-weight: 500;
  }
  img{
      margin-bottom: 14px;
      display: block;
      width: 100%;
  }
  p{
      margin-bottom: 13px;
      color: #b4b4b4;
      line-height: 1.5em;
  }
  .content{
      margin-bottom: 53px;
      color: #b4b4b4;
      line-height: 1.5em;
  }
</style>
<style>
.content p{
    margin-bottom:15px;
}
</style>
