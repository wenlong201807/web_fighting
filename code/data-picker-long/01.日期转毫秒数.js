// 获取某年某月的最后一天
const getLastDayOfMonth = (year,month)=>{
  var date = new Date(year, month, '01');
  console.log('---',date)
  //设置日期
  date.setDate(1);
  //设置月份
  // date.setMonth(month);
  console.log('===',new Date(date.getTime()))
  //获取本月的最后一天
  cdate = new Date(date.getTime() - 1000*60*60*24);
  //返回结果
  // console.log(cdate.getDate())
  return cdate.getDate();
}

console.log(getLastDayOfMonth(2020, 11))

// 获取当前月的 第一天 和 最后一天
const getCurrentMonthLast =()=>{
  var date=new Date();
  date.setDate(1);
  var nextMonthFirstDay = new Date(date.getFullYear(),date.getMonth() + 1,1);
  return [date, new Date(nextMonthFirstDay - 1000*60*60*24)];
}
// console.log(getCurrentMonthLast())