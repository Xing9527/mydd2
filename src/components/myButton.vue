<template>
    <router-link :to="to" class="btn">{{value}}</router-link>
</template>
<script>
export default {
  name:'my-button',
  props:{
      value:{
          type:String
      },
      to:{
          type:String
      }
  }
}
</script>
<style scoped>
.btn{
        display: block;
        margin: 0 auto;
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
    a{
        text-decoration: none;
    }
</style>
