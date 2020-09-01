/**
 * 景禹 公众号
 * https://mp.weixin.qq.com/s?__biz=MzA4NDE4MzY2MA==&mid=2647522892&idx=1&sn=e77db7b84d0951432bbfd0a96c87f06a&chksm=87d2414fb0a5c85903670b6b55afd79e0fca6434ca42e78666e4d49bee26b3edf666fec65571&mpshare=1&scene=1&srcid=0819qsdI88g7m5hx0SeAqtEf&sharer_sharetime=1597804941714&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=c1de06985e16dc4588632e80feb8991c257061d47bfb96a6fd35b521f232cf904ec94aca1cddbf2e3b4e2d01e9dfba1aae5fccdcc650c338e696692a8760a411bb8c6cf8e604b4c8985f3848344c99102307ad23142cf9b650142b4f039f67c1aae945a3e45afe2a20ba2e8987137281cc3343eff1b2b1859831e7c67441e7f3&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AVZxDV3HAeNWanuaH13OyxY%3D&pass_ticket=6W1mq8rPeYGIwhr%2BXl2qPwVdoCUJ3%2F8AZgNBEiVCl%2BtbKDME7%2FbB1BGLMhvYZ65Z
*/

let initArr = [1, 4, 1, 2, 5, 2, 4, 1, 8]
let countArr = new Array(initArr.length).fill(0)


const mapSortHandler = () => {
  for (let k = 0; k < initArr.length; k++) {
    countArr[initArr[k]] += 1
  }
  console.log(initArr)   //[1, 4, 1, 2, 5, 2, 4, 1, 8]
  console.log(countArr)  //[0, 3, 2, 0, 2, 1, 0, 0, 1]
  // return countArr     // 0, 1, 2, 3, 4, 5, 6, 7, 8
  // let resultCountArr = []
  // for (let i = 0; i < countArr.length; i++) {
  //   if (countArr[i] !== 0) {
  //     for (let j = 0; j < countArr[i]; j++) {
  //       console.log(i + " ");
  //       resultCountArr.push(i)
  //     }
  //   }
  // }
  // console.log(resultCountArr)
  // let minArr = []
  for (let h = 1; h < countArr.length; h++) {
    countArr[h] = countArr[h] + countArr[h - 1]
  }
              // initArr = [1, 4, 1, 2, 5, 2, 4, 1, 8]
  console.log(countArr) // [0, 3, 5, 5, 7, 8, 8, 8, 9]

  let resultArr = []
  for (let y = countArr.length - 1; y >= 0; y--) {
    console.log(y, countArr[initArr[y]] - 1)
    resultArr[y] = countArr[initArr[y]] - 1
  }
  console.log(resultArr) // [2, 6, 2, 4, 7, 4, 6, 2, 8]
                         // [0, 5, 1, 3, 7, 4, 6, 2, 8]
}

mapSortHandler()