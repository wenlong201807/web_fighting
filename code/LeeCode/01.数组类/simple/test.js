// 订阅器模型
var Dep = {
  clientList: {},
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  }
};

// 劫持方法
var dataHijack = function ({ data, tag, datakey, selector }) {
  var value = '',
    el = document.querySelector(selector);
  // 数据劫持
  Object.defineProperty(data, datakey, {
    get: function () {
      console.log('我获取到值了');
      return value;
    },
    set: function (newValue) {
      console.log('我设置值了');
      value = newValue;
      Dep.trigger(tag, newValue);
    }
  });
  // 绑定观察者
  Dep.listen(tag, function (text) {
    el.innerHTML = text;
  });
}
// ————————————————
// 版权声明：本文为CSDN博主「欧阳呀」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_35942348/article/details/102876974
// 明文与暗文显示切换
// var getNum = function () {
//   let inP = document.querySelectorAll('.ivu-input')[1]
//   inP.addEventListener('input', function () {
//     let newPwd = this.value
//     let oldPwd = this.getAttribute('password')
//     let resPwd = ''
//     let pos = this.selectionEnd
//     for (let i = 0; i < newPwd.length; i++) {
//       let str = newPwd.charAt(i)
//       if (i < pos && str != '●') {
//         resPwd += str
//       } else if (i < pos && str == '●') {
//         resPwd += oldPwd.charAt(i)
//       } else {
//         resPwd += oldPwd.substr(
//           oldPwd.length - newPwd.length + pos,
//           newPwd.length - pos
//         )
//         break
//       }
//     }
//     newPwd = resPwd.replace(/\S/g, '●')
//     this.setAttribute('password', resPwd)
//     this.value = newPwd
//     this.selectionEnd = pos
//     this.selectionStart = pos
//     console.log(resPwd) // 这个放在表单里作为密码提交
//   })
// },