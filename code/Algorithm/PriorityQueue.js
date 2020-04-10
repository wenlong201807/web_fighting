// 封装优先级队列
function PriorityQueue () {
  // 封装一个新的构造函数，用户保存元素和元素的优先级
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }

  // 属性
  this.items = []

  // 插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1. 根据传入的元素，创建新的QueueElement
    var queueElement = new QueueElement(element, priority)
    console.log('添加一个优先属性',queueElement)

    // 2. 判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement)
    } else {
      // console.log(66)
      var added = false
      for (var i = 0; i < this.items.length; i++){
        // console.log(77)
        console.log(queueElement.priority , this.items[i].priority)
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i,0,queueElement)
          added = true
          break
        }
      }

      // console.log(88)
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  // 2. 从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift()
  }

  // 3. 查看前端元素
  PriorityQueue.prototype.front = function () {
    return this.items[0]
  }

  // 4. 查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length == 0
  }

  // 5. 查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length
  }

  // 6. toString() 方法
  PriorityQueue.prototype.toString = function () {
    var resultString = ''
    for (var i = 0; i < this.items.length; i++){
      resultString += this.items[i].element + '-' + this.items[i].priority + ' , '
    }
    return resultString
  }
}

// 测试代码
var pq = new PriorityQueue()
pq.enqueue('abc',111)
pq.enqueue('cba',200)
pq.enqueue('nba',50)
pq.enqueue('aaa',66)
pq.enqueue('bbb', 7)
pq.enqueue('yyy', 300)
console.log(pq)
console.log(pq.toString())
