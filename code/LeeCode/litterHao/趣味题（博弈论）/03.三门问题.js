// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484261&idx=1&sn=964af640fd56254d6ac37755b378a4fd&chksm=ea911b35dde6922300dea4fb010f8ae219328e79992420621e28876e9af9610fb7bdfa87a495&scene=21#wechat_redirect

/**
 * 三门问题（Monty Hall problem）亦称为蒙提霍尔问题、蒙特霍问题或蒙提霍尔悖论，
 * 出自美国的电视游戏节目Let's Make a Deal。今天为大家进行完整分析。
*/

const isChangeDoor = () => {
  let changeAngelCount = 0, unchangeAngelCount = 0
  let testCount = 100

  for (let i = 0; i < testCount; i++) {
    // //门的总数
    let doors = [1, 2, 3]
    //天使门和选中的门
    let angelDoor = Math.ceil(Math.random() * 3)
    let selectedDoor = Math.ceil(Math.random() * 3)
    console.log('天使门和选中的门:', angelDoor, selectedDoor)
    //上帝移除一扇恶魔门
    for (let j = 0; j < doors.length; j++) {
      if (doors[j] !== selectedDoor && doors[j] !== angelDoor) {
        console.log('我是谁？',doors[j])
        break
      } else {
        console.log('woxuanzhongle ?',doors[j])
      }
    }
    // 统计
    if (selectedDoor === angelDoor) {
      unchangeAngelCount++
    } else {
      changeAngelCount++
    }
  }

  console.log("不换门遇见天使次数:", unchangeAngelCount, "比例：", (unchangeAngelCount / testCount))
  console.log("换门遇见天使次数:", changeAngelCount, "比例：", (changeAngelCount / testCount))
}

// isChangeDoor()

const possiblityAccident = () => {
  let changeBeforeAccident = 0, changedAfterAccident = 0
  let testCount = 100000

  for (let i = 0; i < testCount; i++) {
    // 1 发生事故 2不发生事故
    let isAccidentArr = [1, 0]
    //发生事故的可能性
    let accidented = Math.ceil(Math.random() * 50)
    let lucky = Math.ceil(Math.random() * 25)

    //每个人发生交通事故的可能性
    for (let j = 0; j < isAccidentArr.length; j++) {
      if (isAccidentArr[j] !== lucky && isAccidentArr[j] !== accidented) {
        console.log('没有事故',isAccidentArr[j])
        break
      } else {
        console.log('发生事故',isAccidentArr[j])
      }
    }
    // 统计
    if (lucky === accidented) {
      changedAfterAccident++
    } else {
      changeBeforeAccident++
    }
  }

  console.log("50量时的交通事故", changedAfterAccident, "比例：", (changedAfterAccident / testCount))
  console.log("25量时的交通事故:", changeBeforeAccident, "比例：", (changeBeforeAccident / testCount))
}

possiblityAccident()
