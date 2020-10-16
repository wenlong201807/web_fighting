// 参考资料  https://www.cnblogs.com/cangqinglang/p/11308240.html

function getUserIP () {
  var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  if (RTCPeerConnection) (() => {
    var rtc = new RTCPeerConnection()
    rtc.createDataChannel(''); //创建一个可以发送任意数据的数据通道
    rtc.createOffer(offerDesc => { //创建并存储一个sdp数据
      rtc.setLocalDescription(offerDesc)
    }, e => { console.log(e) })
    rtc.onicecandidate = (evt) => { //监听candidate事件
      // console.log(evt)
      if (evt.candidate) {
        var ip_addr = evt.candidate.address
        console.log(evt.candidate)
        localStorage.setItem('ip_addr', ip_addr)
        let ip_rule = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
        var ip_addr = ip_rule.exec(evt.candidate.address)
        // var ip_addr = ip_rule.exec(evt.candidate.candidate)[1]
        console.log("ip_addr==",ip_addr)
      }
    }
  })()
  else { console.log("目前仅测试了chrome浏览器OK") }
}

getUserIP()

