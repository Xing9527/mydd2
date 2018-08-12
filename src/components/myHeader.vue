<template>
  <div class="header">
      <router-link to="/project" :class="{active:$route.name==='diamond'}">
        <span>钻石创业者</span>
      </router-link>
      <router-link to="/project/gold" :class="{active:$route.name==='gold'}">
        <span>金牌创业者</span>
      </router-link>
      <router-link to="/project/silver" :class="{active:$route.name==='silver'}">
        <span>银牌创业者</span>
      </router-link>
  </div>
</template>
<script>
export default {
  name:'my-header'
}
</script>
<style scoped>
.header{
    display: flex;
    justify-content: space-around;
    margin:45px 0 0 0;
    height: 50px;
    border-bottom:1px solid #dedede;      
    box-sizing: border-box;    
}
a{
    display: block;
    width: 110px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    color:#333;
}
span{
    font-size:16px;

}
.active{
    color: #006bb6;
    background: #fff;
    border-left:1px solid #dedede;
    border-right:1px solid #dedede;
    border-bottom:none;
    box-sizing: border-box;
}
</style>
