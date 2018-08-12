<template>
  <label>
      <span>{{label}}</span>
      <input :type="type" v-model="currentValue">
  </label>
</template>
<script>
export default {
  name:'didi-input',
  props:{
      value:{
          type:String,
          require:true
      },
      type:{
          type:String
      },
      label:{
          type:String
      }
  },
  data(){
      return {
          currentValue:this.value
      }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input',val)
    }
  }
}
</script>
<style scoped>
label{
    display:block;
    padding: 18px 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
}
span{
    display: inline-block;
    width: 107px;
    text-align: right;
    font-size: 16px;
    color: #000;
}
input{
    font-size: 16px;
}

</style>

