let arr = [
  {name:'jj',id:[1,3]},
  {name:'jj',id:[5,8]},
  {name:'hh',id:[3,9,3]},
]

let kk = new Map()
arr.map(item => {
  if (kk.has(item.name)) {
    // console.log('pp:', kk.get(item.name))
    let ddd = kk.get(item.name).concat(...item.id)
    // console.log('合并之后：',ddd)
    kk.set(item.name,ddd)
  } else {
    // console.log('id:',item.id)
    kk.set(item.name,item.id)
  }
})
console.log(kk)
