<template>
  <div v-color="color" v-click-outside>
    <input type="text" :value="formatData" />
    <!-- <input type="text" :value="formatData" @focus="focus" @blur="blur" /> -->
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        <span>&lt;</span>
        <span @click="preMonth">&lt;&lt;</span>
        <span>{{ time.year }}年</span>
        <span>{{ time.month }}月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span>&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7" :key="'_' + j" class="cell">
            {{ weekDays[j - 1] }}
          </span>
          <!-- 直接列出一个 6*7 的一个列表， 99乘法表 weekDays-->
          <div v-for="i in 5" :key="i">
            <!-- 判断 -->
            <span
              @click="chooseDate(visibeDays[(i - 1) * 7 + (j - 1)])"
              v-for="j in 7"
              :key="j"
              :class="[
                {
                  cell: true,
                },
                {
                  notCurrentMonth: isCurrentMonth(
                    visibeDays[(i - 1) * 7 + (j - 1)]
                  ),
                },
                {
                  today: isToday(visibeDays[(i - 1) * 7 + (j - 1)]),
                },
                {
                  select: isSelect(visibeDays[(i - 1) * 7 + (j - 1)]),
                },
              ]"
            >
              {{ visibeDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer">今日：{{today}}</div>
    </div>
  </div>
</template>

<script>
import * as utils from './util';
export default {
  // 自定义指令就是操作dom
  directives: {
    color(el, { value }) {
      value = value || '#000';
      el.style.background = value;
    },
    // aa:{ //v-click-outside
    clickOutside: {
      //v-click-outside
      // 指令的生命周期
      bind(el, bingdings, vnode) {
        // context
        // console.log(bingdings, vnode);
        // 把事件绑定给document ，看一下点击的是否是当前这个元素内部
        let handler = (e) => {
          // console.log(e.target)
          if (el.contains(e.target)) {
            // 判断一下，是否当前面板已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus();
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
            }
          }
        };
        el.handler = handler;
        document.addEventListener('click', handler);
      },
      unbind(el) {
        document.removeEventListener('click', el.handler);
      },
    },
  },
  data() {
    let { year, month } = utils.getYearMonthDay(this.value);
    return {
      today:'2020-11-14',
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      time: { year, month },
      color: 'pink',
      isVisible: false, // 这个变量是使用来控制这个面板是否可见
    };
  },
  props: {
    value: {
      type: Date,
      default: () => new Date(), // 如果是复杂类型，必须有默认值，以函数的方式返回
    },
  },

  methods: {
    focus() {
      this.isVisible = true; // 显示面板
    },
    blur() {
      this.isVisible = false; // 隐藏面板
    },
    isCurrentMonth(date) {
      // 它是不是当月，this.value
      // 我现在知道当前用户传入的值， 2018 5 18 2018 4 28 / 2018 6 8
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      // let { year, month } = utils.getYearMonthDay(this.value);
      let { year: y, month: m } = utils.getYearMonthDay(date);

      return year === y && month === m;
    },
    isToday(date) {
      // 它是不是当月，
      // 我现在知道当前用户传入的值， 2018 5 18 2018 4 28 / 2018 6 8
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);

      return year === y && month === m && day === d;
    },
    chooseDate(date) {
      this.time = utils.getYearMonthDay(date); // 更新年月的时间
      this.$emit('input', date); // 选中的日期传给父组件
      this.blur(); // 关闭弹框
    },
    isSelect(date) {
      // 获取当前的年月日
      let { year, month, day } = utils.getYearMonthDay(this.value);
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);

      return year === y && month === m && day === d;
    },
    preMonth() {
      console.log('上一个月')
      // 获取当前年份的前一个月
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() - 2);
      this.time = utils.getYearMonthDay(d);
    },
    nextMonth() {
      console.log('下下。。。一个月')
      // 获取当前年份的前一个月
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() + 1);
      this.time = utils.getYearMonthDay(d);
    },
  },
  mounted() {
    // console.log(this.visibeDays);
  },
  computed: {
    visibeDays() {
      // TODO
      // 先获取当前是周几
      // let { year, month,day } = utils.getYearMonthDay(utils.getDate(this.time.year,this.time.month,1));
      let { year, month, day, week } = utils.getYearMonthDay(this.value);
      // let { year, month,day } = utils.getCurrentTime(this.value);
      console.log('获取年月日：', year, month, day, week);

      let {oneWeek,oneMill} = utils.getFirstDayOfMonthMilliseconds();
      console.log('获取本月第一天零点零分零秒===的毫秒数:', oneWeek,oneMill);
      // 获取当前月份的第一天

      let oneRowDayMil = oneMill - 1000 * 60 * 60 * 24 * oneWeek;

      // let today = new Date();
      // console.log('=====', today.getTime());
      // let targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * week;
      // today.setTime(targetday_milliseconds);
      // let rowFirstTimeMilliseconds = today.getTime();
      // console.log('第一行的第一个时间的毫秒数：', rowFirstTimeMilliseconds);

      // let unixTimestamp = new Date(oneRowDayMil);
      // let unixTimestamp = new Date(rowFirstTimeMilliseconds);
      // let commonTime = unixTimestamp.toLocaleString();
      // console.log('当前月份第一天，同一行的第一个日期数字对应的毫秒数：', commonTime);

      let arr = [];
      for (let i = 0; i < 35; i++) {
        // console.log(i,new Date(oneRowDayMil + i * 60 * 60 * 1000 * 24))
        arr.push(new Date(oneRowDayMil + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    },
    formatData() {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style>
.pannel {
  position: absolute;
  width: 32 * 7px;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
}

.pannel-nav {
  background: yellowgreen;
  display: flex;
  justify-content: space-around;
  height: 30px;
}
.pannel-nav span {
  cursor: pointer;
  user-select: none;
}

.pannel-content {
  background: yellow;
}

.pannel-content .days {
  background: yellow;
}

.pannel-content .days .cell {
  background: rgb(221, 221, 214);
  display: inline-block;
  justify-content: center;
  align-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
}
.pannel-content .days .cell:hover {
  background: rgb(0, 255, 34);
}

.pannel-footer {
  background: rgb(205, 177, 50);
  height: 30px;
  text-align: center;
}

.pannel-content .days .notCurrentMonth {
  color: grey;
}
.pannel-content .days .today {
  background: red;
  color: #fff;
  border-radius: 4px;
}
.pannel-content .days .select {
  background: rgb(189, 147, 228);
  color: rgb(17, 12, 12);
  border-radius: 4px;
}
</style>
