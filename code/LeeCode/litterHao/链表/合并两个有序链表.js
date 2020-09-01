
// const l1 = [1,2,4] 
// const l2 = [1,3,4]
let l1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 4,
      next: null
    }
  }
}
let l2 = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 4,
      next: null
    }
  }
}
const mergeTwoLists = (l1, l2) => {
  let prehead = {}
  let result = {}
  let i =0
  while (l1.next !== null && l2.next !== null) {
    if (l1.data < l2.data) {
      prehead.next = l1
      l1 = l1.next
    } else {
      prehead.next = l2
      l2 = l2.next
    }
    i++
    console.log(i,prehead)
    prehead = prehead.next
  }
  if (l1.next !== null) {
    prehead.next = l1
  }
  if (l2.next !== null) {
    prehead.next = l2
  }
  // for l1 != nil && l2 != nil {
  //     if l1.Val < l2.Val {
  //         prehead.Next = l1
  //         l1 = l1.Next
  //     }else{
  //         prehead.Next = l2
  //          l2 = l2.Next
  //      }
  //      prehead = prehead.Next
  //  }
  //  if l1 != nil {
  //      prehead.Next = l1
  //  }
  //  if l2 != nil {
  //      prehead.Next = l2
  //  }
  console.log(prehead)
  // return result.Next
}
mergeTwoLists(l1, l2)