<template>
  <div class="hello">
    <mt-header title="报名流程">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div id="img-wrap">
      <img src="../.././static/images/01.png" alt=""> 
      <img class="pic" src="../.././static/images/02.gif" alt=""> 
    </div>    
  </div>
</template>

<script>
export default {
  name: 'apply',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
  .hello .mint-header{
    position: fixed;
    left:0;
    top:0;
    right: 0;
    height: 45px;
    background: #006eb8;
    font-size:20px;
  }
  
</style>

<style scoped>
#img-wrap{
  margin-top:45px;
  width: 100%;
}
img{
    display: block;
    width: 100%;
}
.pic{
  width: 85%;
  margin:0 auto;
}
</style>
