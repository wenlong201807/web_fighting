let arr = [];
arr[3] = 3;

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(0 in arr)
console.log('undefined' in arr)
console.log(3 in arr)
// arr.length ? arr[0] ?  0 in arr ?


// 4  undefined  fasle

// 结论 ： 数组的下标不一定是连续的，直接赋值还会影响它的长度。