// var oDay = new Date(); 
// oDay.getYear(); //当前年份
// oDay.getFullYear(); //完整的年月日（xx年，xx月，xx日）
// oDay.getMonth(); //当前的月份(0-11,0代表1月)         
// // 获取当前的月份是oDay.getMonth()+1;   <br>oDay.getDate(); //当前的日(1-31)
// oDay.getDay(); //当前的星期X(0-6,0代表星期天) 
// oDay.getTime(); //当前的时间(从1970.1.1开始的毫秒数) 
// oDay.getHours(); //当前的小时数(0-23) 
// oDay.getMinutes(); //当前的分钟数(0-59) 
// oDay.getSeconds(); //当前的秒数(0-59) 
// oDay.getMilliseconds(); //当前的毫秒数(0-999) 
// oDay.toLocaleDateString(); //当前的日期 
// var oTime=oDay.toLocaleTimeString(); //当前的时间  <br>oDay.toLocaleString( ); //日期与时间


//本月有多少天
// var oDate=new Date();
// oDate.setMonth(oDate.getMonth()+1);
// oDate.setDate(0);
// alert(oDate.getDate());
// //本月第一天是周几
// var oDate=new Date();
// oDate.setDate(1);
// alert(oDate.getDay())
// //本月最后一天是周几
// var oDate=new Date();

// oDate.setMonth(oDate.getMonth()+1);
// oDate.setDate(0);
// alert(oDate.getDay());

// 获取当前毫秒时间戳有以下三种方法：  
// var timestamp1 =Date.parse(new Date()); //结果：1280977330000 //不推荐; 毫秒改成了000显示
// var timestamp2 =(new Date()).valueOf(); //结果：1280977330748 //推荐;
// var timestamp3 =new Date().getTime(); //结果：1280977330748 //推荐;
// console.log(timestamp1)
// console.log(timestamp2)
// console.log(timestamp3)

// 注：js中单独调用new Date(); 显示这种格式 Mar 31 10:10:43 UTC+0800 2012；
// 但是用new Date() 参与计算会自动转换为从1970.1.1开始的毫秒数  

// 将字符串形式的日期转换成日期对象 
var strTime="2011-04-16";    //字符串日期格式            

var date= new Date(Date.parse(strTime.replace(/-/g,  "/")));      //转换成Data();  
new Date() ;     //参数可以为整数; 也可以为字符串; 但格式必须正确 
new Date(2009,1,1);     //正确 
new Date("2009/1/1");   //正确  
new Date("2009-1-1");   //错误  
// new Date( year, month, date, hrs, min, sec)  //按给定的参数创建一日期对象 
// 参数说明： 
// year的值为：需设定的年份-1900。例如需设定的年份是1997则year的值应为97，
//     即1997 - 1900的结果。所以Date中可设定         的年份最小为1900； 
// month的值域为0～11，0代表1月，11表代表12月； 
// date的值域在1～31之间； 
// hrs的值域在0～23之间。从午夜到次日凌晨1点间hrs=0，从中午到下午1点间hrs=12； 
// min和sec的值域在0～59之间。 
var day1 = new Date(2020, 11, 14); 
// console.log('day1:',day1) // 2020-12-13T16:00:00.000Z
var  day2=new Date(10,1,30,10,12,34); 
// console.log('day2:',day2) // 1910-03-02T02:12:34.000Z
var day3 = new Date() // 今天是 2020,11,14号
// console.log('day3:', day3) // 2020-11-14T14:50:26.562Z

// 怎么将时间戳转换为几个月前，几周前，几天前，几分钟前的形式
function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}

// 转换标准时间为时间戳：
function getDateTimeStamp(dateStr){
  return Date.parse(dateStr.replace(/-/gi,"/"));
}
 

// js 时间戳 和 格式化时间转化
function timestampToTime (timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  // var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  Y = date.getFullYear() + '-';
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  D = date.getDate() + ' ';
  h = date.getHours() + ':';
  m = date.getMinutes() + ':';
  s = date.getSeconds();
  return Y + M + D + h + m + s;
}

console.log(new Date().getTime(),typeof new Date().getTime()) // 1605366188951 number
console.log(timestampToTime(new Date().getTime())) // 2020-11-14 23:3:8
