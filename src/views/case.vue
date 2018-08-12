<template>
  <div class="case">
      <mt-header title="工程案例">
        <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <ul>
          <li v-for="item in items" :key="item.id">
              <img :src="item.img" alt="">
              <p>项目名称 : {{item.title}}</p>
              <p>施工内容 : {{item.content}}</p>
              <p>工程地点 : {{item.site}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"case",
  data(){
      return {
          items:[]
      }
  },
  methods:{
      getCase(){
          this.$axios.get('getCases').then(res=>{
              console.log(res)
              this.items = res.data
          })
      }
  },
  mounted(){
      this.getCase()
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
      margin: 45px 0 45px;

  }
  li{
      padding: 10px;
      border-bottom: 1px solid #ccc;
  }
  img{
      display: block;
      margin-bottom: 5px;
      width: 100%;
  }
  p{
      line-height: 2em;
  }
</style>
