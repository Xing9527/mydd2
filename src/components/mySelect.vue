<template>
  <label class="select">
    <span class="label-font">{{label}}</span>
    <select name="" id="" v-model="currentValue">
        <option value="0">钻石会员</option>
        <option value="1">金牌会员</option>
        <option value="2">银牌会员</option>
    </select>
</label>
</template>
<script>
export default {
  name:'my-select',
  props: {
    value: {
      type: String,
      require: true
    },
    label: {
      type: String,
      default: 'text'
    },
    type: {
      type: String,
    }
  },
  data () {
    return {
        currentValue: this.value
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
select{
    background: transparent;
    width: 220px;
    padding: 5px 10px;
    font-size: 16px;
    height: 30px;
    -webkit-appearance: none;
     background: #fff;
  }
  .select {
  display: block;
  margin: 10px auto;
  height: 33px;
  width: 95%;  
  line-height: 33px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 5px;
  background: #fff;
  border: 1px solid #ddd;
}
  .label-font {
  display: inline-block;
  padding-right: 10px;
  text-align: right;
  width: 80px;
  height: 33px;
  color:#000;
  font-size:16px;
  font-weight: 500;
  border-right:  1px solid #ddd;
}
</style>
