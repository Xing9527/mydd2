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
  height: 57px;
  width: 95%;  
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
}
.my-input {
  flex-grow: 1;
  font-size: 16px;
  outline: none;
}
.label-font {
  width: 80px;
  color:#000;
  font-size:18px;
  font-weight: 700;
}
</style>
