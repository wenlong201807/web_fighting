
// 统计埋点，自定义数据
var _hmt = _hmt || []

  (
    function () {
      var hm = document.createElement('script')
      hm.src = 'https://localhost:3000/dynamic.js'
      var s = document.getElementsByClassName('script')[0]
      s.parentNode.insertBefore(hm, s)
    }
  )()

  // 链接提交代码
  (
    function () {
      var bp = document.createElement('script')
      var curProtocol = window.location.protocol.split(':')[0]
      if (curProtocol === 'https') {
        bp.src = 'https://localhost:3000/dynamic.js'
      } else {
        bp.src = 'http:loaclhost:3000/default.js'
      }

      var s = document.getElementsByClassName('script')[0]
      s.parentNode.insertBefore(bp, s)
    }
  )()