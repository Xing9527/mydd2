<template>
  <div class="news">
    <mt-header title="新闻公告">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul>
        <li v-for="item in items" :key="item.id">
            <router-link :to="'/newsDetail?id='+item._id">
                <h2 v-text="item.title"></h2>
                <p class="text" v-text="item.contentText.substring(0,50)"></p>
                <p class="date" v-text="item.createTime">2015年09月11日 15:50</p>
                <div class="detail">查看详情</div>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'news',
  data () {
      return {
          items: [],
      }
  },
  methods:{
      getNews(){
          this.$axios.get('getNews').then(res=> {
                console.log(res)
                this.items = res.data;
            })
      },
      getDate(t){
        var _time=new Date(t);
        var   year=_time.getFullYear();
        var   month=_time.getMonth()+1;
        var   date=_time.getDate();
        var   hour=_time.getHours();
        var   minute=_time.getMinutes();
        var   second=_time.getSeconds();
        return   year+"年"+month+"月"+date+"日   "+hour+":"+minute+":"+second;
      }
  },
  mounted(){
      this.getNews()
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
  ul{
      margin:58px 0 55px;
  }
  li{
      position: relative;
      overflow:initial;
      margin: 0 auto 30px;
      padding: 10px;
      box-sizing: border-box;
      width: 90%;
      border-left: 3px solid #006eb8;
      border-top:1px solid #cfcfcf;
      box-shadow: 1px 1px 2px 1px rgba(0,0,0,.3);
  }
  a{
      text-decoration: none;
  }
  h2{
      margin-bottom: 10px;
      font-weight: 500;
      color:#000;
  }
  p{
      color:#b1b1b1; 
  }
  .text::after{
      content: "...";
  }
  .date{
      margin-top:15px;
      text-align: right;
  }
  .detail{
      position: absolute;
      right: 0;
      bottom:-20px;
      width: 62px;
      height: 20px;
      background: #7a7a7a;
      color: #e1e1e1;
      text-align: center;
      line-height: 20px;
  }
</style>


