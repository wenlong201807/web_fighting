function plusOne(digits) {
  var i = digits.length - 1
  while(i>=0){ // 遍历数组，从后往前移动
      if(i > 0 && digits[i] == 9){
          digits[i] = 0
      }else{
        if(i == 0 && digits[0] == 9){
          digits[0] = 0
          digits.unshift(1)
          return digits
        }else{
          digits[i] = digits[i] + 1
          return digits
        }
      }   
      i = i - 1
  }
  return arr
};
let arr = [1,2,3]
// let arr = [9]
console.log(plusOne(arr))


