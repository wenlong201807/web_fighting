// 放置工具方法

const getYearMonthDay = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let week = date.getDay();
  return { year, month, day, week };
};

const getDate = (year, month, day) => {
  return new Date(year, month, day);
};

const toNumberTime = (zhTime) => {
  // var d = new Date('Mon Nov 30 2020 00:00:00 GMT+0800 (中国标准时间)');
  var d = new Date(zhTime);
  // var d = new Date('Thu May 12 2016 08:00:00 GMT+0800 (中国标准时间)');
  var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  // var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  console.log(datetime);
  return datetime;
};

// function getBeforeDay(day) {
//   var today = new Date();
//   var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
//   today.setTime(targetday_milliseconds); //注意，这行是关键代码
//   var tYear = today.getFullYear();
//   var tMonth = today.getMonth();
//   var tDate = today.getDate();
//   tMonth = doHandleMonth(tMonth + 1);
//   tDate = doHandleMonth(tDate);
//   return tYear + '-' + tMonth + '-' + tDate;
// }

//时间戳转换
// function formatDateTime (inputTime) {
//   var date = new Date(inputTime);
//   var y = date.getFullYear();
//   var m = date.getMonth() + 1;
//   m = m < 10 ? ('0' + m) : m;
//   var d = date.getDate();
//   d = d < 10 ? ('0' + d) : d;
//   var h = date.getHours();
//   h = h < 10 ? ('0' + h) : h;
//   var minute = date.getMinutes();
//   var second = date.getSeconds();
//   minute = minute < 10 ? ('0' + minute) : minute;
//   second = second < 10 ? ('0' + second) : second;
//   return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
// }
//获取本月第一天零点零分零秒
const getFirstDayOfMonthMilliseconds = () => {
  var data = new Date();
  data.setDate(1);
  data.setHours(0);
  data.setSeconds(0);
  data.setMinutes(0);
  let oneWeek = data.getDay()
  let oneMill = data.getTime()
  // console.log('获取本月第一天零点零分零秒:',formatDateTime(data.getTime()));
  // return formatDateTime(data.getTime())
  return {oneWeek,oneMill}
}


// 获取某年某月的第一天
// const getLastDayOfMonth =(year,month)=>{
//   var date = new Date(year,month-1,'01');
//   //设置日期
//   date.setDate(1);
//   //设置月份
//   date.setMonth(date.getMonth() + 1);
//   //获取本月的最后一天
//   cdate = new Date(date.getTime() - 1000*60*60*24);
//   //返回结果
//   return cdate.getDate();
// },


const getCurrentTime = (zhTime) => {
  console.log(zhTime);
  var date = new Date(zhTime);

  //  let year = date.getYear(); //获取当前年份(2位)
  let year = date.getFullYear(); //获取完整的年份(4位)
  let month = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  let week = date.getDate(); //获取当前日(1-31)
  let day = date.getDay(); //获取当前星期X(0-6,0代表星期天)
  //  let timeStamp = date.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
  //  let hour = date.getHours(); //获取当前小时数(0-23)
  //  let min = date.getMinutes(); //获取当前分钟数(0-59)
  //  let s = date.getSeconds(); //获取当前秒数(0-59)
  //  let  = date.getMilliseconds(); //获取当前毫秒数(0-999)
  //  let  = date.toLocaleDateString(); //获取当前日期

  // var mytime=date.toLocaleTimeString(); //获取当前时间

  // date.toLocaleString( ); //获取日期与时间
  return { year, month, week, day };
};

// toNumberTime()
export { getYearMonthDay, getDate, toNumberTime, getCurrentTime, getFirstDayOfMonthMilliseconds };
