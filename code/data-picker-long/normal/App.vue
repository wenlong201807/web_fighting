<template>
  <div>
    <!-- :value="now" @input="val => now = val" -->
    <!-- <DataPickerLong :value="now" @input="val => now = val" ></DataPickerLong> -->
    <DataPickerLong
      v-model="now"
    ></DataPickerLong>
    我是时间选择器下一行的内容，要求是不可移动的
  </div>
</template>

<script>
import * as utils from './util';
import DataPickerLong from './data-picker'

export default {
  components:{
    DataPickerLong
  },
  data(){
    return {
      now : new Date()
    }
  },
  watch: {
    now(a){
      let { year, month, day } = utils.getYearMonthDay(a);
      console.log('获取当前日期：',year, month, day)
    }
  },
  methods: {
    chooseDate(date) {
      this.time = utils.getYearMonthDay(date); // 更新年月的时间
      this.$emit('input', date); // 选中的日期传给父组件
      this.blur(); // 关闭弹框
    },
  },
}
</script>

<style >
  
</style>