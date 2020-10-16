// 参考资料 https://blog.csdn.net/meimeilive/article/details/82431466

//利用"模n取余法"模拟手动除法
//a/b   a>b
function big_div(a,b){
	var alen=a.length,blen=b.length;
	var quotient=0,remainder=0;
	var result=[],temp=0 ;
	for(var i=0;i<alen;i++){
		temp=remainder*10+parseInt(a[i]);
		if(temp<b){
			remainder=temp;
			result.push(0);
		}else{
			quotient=parseInt(temp/b);
			remainder=temp%b;
			result.push(quotient);
		}
		
	}
	return [result.join("").replace(/\b(0+)/gi,""),remainder];//结果返回[商，余数]
}


let a = '123456789654'
let b = '2635'
// console.log(big_div(a, b))

// JS 中能精准表示的最大整数是 Math.pow(2, 53)，十进制即 9007199254740992。
console.log(Math.pow(2, 53) === 9007199254740992)
console.log(2**53 === 9007199254740992)