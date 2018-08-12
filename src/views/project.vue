<template>
  <div class="project">
    <mt-header title="创业项目">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <myHeader></myHeader>
    <transition name="view">
      <router-view></router-view>  
    </transition>  
  </div>
</template>
<script>
import myHeader from "@/components/myHeader.vue"
export default {
  name:"project",
  components:{
    myHeader
  }
}
</script>
<style>
.project .mint-header{
  position: fixed;
  left:0;
  top:0;
  width: 100%;
  height: 45px;
  background: #006eb8;
  font-size:20px;
}
.view-enter-active,.view-leave-active{
    transition: all .5s ease;
    position: fixed;
    left: 0;
    right: 0;
}
.view-enter, .view-leave-to{
  opacity: 0;
}
</style>
<style scoped>

</style>

