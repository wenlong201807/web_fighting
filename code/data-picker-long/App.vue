<template>
  <div>
    <DataPickerLong v-model="now"></DataPickerLong>
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
}
</script>
