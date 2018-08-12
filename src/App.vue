<template>
  <div id="app">
    <transition  name="fade">
    <router-view></router-view>      
    </transition>
    <myFooter></myFooter>      
  </div>
</template>
<script>
import myFooter from "@/components/myFooter.vue"
export default {
  name: 'App',
  data(){
    return {
      transitionName:''
    }
  },
  components:{
    myFooter
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
}
</script>

<style>
  @import "style/init.css";
body{
  background: #f5f5f5;
}
.fade-enter-active,.fade-leave-active{
  transition: all .8s ease;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
