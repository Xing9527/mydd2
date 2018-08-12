<template>
  <label class="input-wrap">
      <span class="label-font">
          {{label}}
      </span>
    <input :type="type" class="my-input" v-model="currentValue">
  </label>
</template>
<script>
export default {
  name:'my-input',
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
.input-wrap {
  display: block;
  margin: 0 auto;
  height: 33px;
  width: 95%;  
  line-height: 33px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0 5px;
  background: #fff;
  border: 1px solid #ddd;
}
.my-input {
  margin-left: 15px;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
}
.label-font {
  display: inline-block;
  padding-right: 7px;
  text-align: right;
  width: 80px;
  height: 33px;
  color:#000;
  font-size:16px;
  font-weight: 500;
  border-right:  1px solid #ddd;
}
</style>
