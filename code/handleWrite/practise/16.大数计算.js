// 参考资料 https://blog.csdn.net/Twinkle_sone/article/details/109040247

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  //其中一个数字为零时，乘积为0，直接返回0
  if (num1 == '0' || num2 == '0') return '0';
  var res = [],   // res->保存结果
    flag = 0,	//flag->保存进位
    ind = 0;	//ind->当前数字对齐的位数
  //遍历第一个数的每一位
  for (let i = num1.length - 1; i >= 0; i--) {
    //遍历第二个数的每一位
    for (let j = num2.length - 1; j >= 0; j--) {
      //保存计算结果
      let temp = parseInt(num1[i]) * parseInt(num2[j]) + flag;//注意加上flag(进位)
      flag = Math.floor(temp / 10);//更新进位数
      //如果当前计算位置大于res的长度，直接将结果push（接到最后一位），注意应该mod 10
      //因为乘法是倒序计算的，所以位置应该为 num2.length - 1 - j + ind
      if ((num2.length - 1 - j + ind) >= res.length) res.push(parseInt(temp) % 10);
      else {
        //计算结果应该加上该位置上的数
        if ((res[num2.length - 1 - j + ind] + (parseInt(temp) % 10)) > 9) flag++;
        res[num2.length - 1 - j + ind] = (res[num2.length - 1 - j + ind] + (parseInt(temp) % 10)) % 10;
      }
    }
    if (flag) res[ind + num2.length] = flag;
    flag = 0;
    //更新初始位
    ind++;
  }
  //reverse()将列表反置，join('')将列表转换成字符串
  return res.reverse().join('');
};

let num1 = '1865459497823'
let num2 = '6349526719336'
console.log(multiply(num1, num2))
let result = Number(num1)*Number(num2)
console.log(result)