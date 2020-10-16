// 参考资料 https://www.ucloud.cn/yun/81759.html

// 整数的构造函数
function NumberObject (string, sign) {
  if (sign === -1) {
    this.number = reverseString(string.slice(1));
    this.length = string.length - 1;
  }
  else if (sign === 1) {
    this.number = reverseString(string);
    this.length = string.length;
  } else {
    alert("The sign of the number is wrong!");
    // 程序停止
    // stop();
  }
  this.sign = sign;
}

// 字符串颠倒 (传入字符串， 传出字符串)
function reverseString (string) {
  return string.split('').reverse().join('');
}

// 补零 (传入字符串， 传出字符串)
function addFrontZero (string, length) {
  for (let i = 0; i < length; i++) {
    if (i > string.length - 1) {
      string += '0';
    }
  }
  return string;
}

// 去零 (传入字符串，传出字符串)
function deleteFrontZero (string) {
  let arr = string.split('');
  let end = arr.length - 1;

  while (arr[end--] === '0') {
    arr.pop();
  }

  if (arr.length === 0) {
    arr.push('0');
  }
  return arr.join('');
}

// 将参数统一转换为字符串
function numberTransform (number) {
  switch (typeof number) {
    case 'number':
      return String(number);
    case 'object':
      return number.reverse().join('');
    case 'undefined':
      alert("you didn't input the number.");
    default:
      return number;
  }
}

// 分析元素
function numberAnalysis (number) {

  let raw = numberTransform(number);
  if (raw[0] != '-' && raw[0] < '0' || raw[0] > '9') {
    alert('The number you input is wrong.');
  }

  for (let i = 1; i < raw.length; i++) {
    if (raw[i] < '0' || raw[0] > '9') {
      alert('The number you input is wrong.');
    }
  }

  if (raw[0] === '-') {
    return new NumberObject(raw, -1);
  } else {
    return new NumberObject(raw, 1);
  }
}

// 数字相加，（传入字符串，传出字符串）
function addString (first, second) {

  let carry = 0,
    rst = [];
  let length = first.length > second.length ? first.length : second.length;

  // 第一个加数
  let fst = addFrontZero(first, length);
  // 第二个加数
  let scd = addFrontZero(second, length);

  for (let i = 0; i < length || carry === 1; i++) {

    if (fst[i] && scd[i]) {
      rst[i] = ((fst[i] - 0) + (scd[i] - 0) + carry) % 10;
      carry = ((fst[i] - 0) + (scd[i] - 0) + carry) / 10;
    } else if (!fst[i] && scd[i]) {
      rst[i] = ((scd[i] - 0) + carry) % 10;
      carry = ((scd[i] - 0) + carry) / 10;
    } else if (fst[i] && !scd[i]) {
      rst[i] = ((fst[i] - 0) + carry) % 10;
      carry = ((fst[i] - 0) + carry) / 10;
    } else if (!fst[i] && !scd[i] && carry === 1) {
      rst[i] = carry;
      carry = 0;
    } else {
      alert("The logic of your addition is wrong.");
    }

    // JS 的商一般都为小数，需要取整
    carry = Math.floor(carry);
  }
  return rst.join('');
}

function multiply (first, second) {

  // 返回的字符串结果和判断符号
  let firstNumber = first.number;
  let secondNumber = second.number;

  let rst = pieceOfMultiplication(firstNumber, secondNumber).split('');

  // 判断正负号
  if (first.sign * second.sign === -1) {
    rst.push('-');
  }
  return new numberAnalysis(rst);
}

// 实现分治法
function pieceOfMultiplication (first, second) {

  let length = first.length > second.length ? first.length : second.length;

  // 补零，使得位数相同
  for (let i = 0; i < length; i++) {
    if (i > first.length - 1) {
      first.number += '0';
    }
    if (i > second.length - 1) {
      second.number += '0';
    }
  }

  let half = Math.floor(length / 2);

  // 分割数字
  let firstLeft = first.slice(0, half);
  let firstRight = first.slice(half);
  let secondLeft = second.slice(0, half);
  let secondRight = second.slice(half);

  // 递归长度大于2的数相乘
  if (half >= 2) {

    // 分解
    let leftRst = pieceOfMultiplication(firstLeft, secondLeft);
    let centerRst = addString(pieceOfMultiplication(firstLeft, secondRight), pieceOfMultiplication(firstRight, secondLeft));
    let rightRst = pieceOfMultiplication(firstRight, secondRight);

    leftRst = deleteFrontZero(String(leftRst));
    centerRst = deleteFrontZero(String(centerRst));
    rightRst = deleteFrontZero(String(rightRst));

    // 重组
    let left = leftRst.slice(0, half);
    let leftCarry = leftRst.slice(half);

    centerRst = addString(centerRst, leftCarry);

    let center = centerRst.slice(0, half);
    let centerCarry = centerRst.slice(half);

    let right = addString(rightRst, centerCarry);

    return deleteFrontZero(left + center + right);
  }
  // 两位数相乘
  else if (half === 1) {
    // 一位或两位的字符串转数字
    let firstLeftNumber = Number(reverseString(firstLeft));
    let firstRightNumber = Number(reverseString(firstRight));
    let secondLeftNumber = Number(reverseString(secondLeft));
    let secondRightNumber = Number(reverseString(secondRight));

    // 相乘
    let leftRstNumber = firstLeftNumber * secondLeftNumber;
    let centerRstNumber = firstLeftNumber * secondRightNumber + secondLeftNumber * firstRightNumber;
    let rightRstNumber = firstRightNumber * secondRightNumber;

    // 重组
    let left = leftRstNumber % 10;
    let centerRst = Math.floor(leftRstNumber / 10) + centerRstNumber;
    let center = centerRst % 10;
    let right = Math.floor(centerRst / 10) + rightRstNumber;

    left = deleteFrontZero(reverseString(String(left)));
    center = deleteFrontZero(reverseString(String(center)));
    right = deleteFrontZero(reverseString(String(right)));
    return deleteFrontZero(left + center + right);
  }

  else {
    alert("The multiplication is wrong");
  }
}




// 规定： 传入的x 和 y 数据类型必须为字符型，因为大整数为默认判定为数字上限
function testFn (x, y) {

  let elem1 = numberAnalysis(x);
  let elem2 = numberAnalysis(y);
  let rst = multiply(elem1, elem2)

  if (rst.sign === -1) {
    return '-' + reverseString(rst.number);
  }
  else if (rst.sign === 1) {
    return reverseString(rst.number);
  }
}



let first = '1234'
let second = '567'
// let first = '125634789321'
// let second = '45236987125'
console.log(testFn(first, second))


