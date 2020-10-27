/**
 * 汉诺塔问题描述
 * 
 * 有三个柱子  A  B  C  ,可以用来堆放盘子
 * A 为起始盘子对方点  C 为目标点，B 为中间可以状态的柱子
 * 1.把三个盘子从 A 移动到 C 
 * 2.每次只能移动一个
 * 3.大盘子不能放在小盘子上面
*/
/**
 * from A
 * to   C
 * use  B
*/
function moveTwoer (n, from, to, use) { // 递归初始条件
  if (n === 1) {
    moveDisk(from,to)
    return
  } else { // 递归条件
    moveTwoer(n-1,from,use,to)
    moveDisk(from,to)
    moveTwoer(n-1,use,to,from)
  }
}

/**
 * 汉诺塔问题总结
 * 
 * 1.将原问题拆分成诺干个 规模更小，独立的 若干个可以被解决的子问题
 * 2.通过这种方式我们避免了陷入 解决重复的细节
*/