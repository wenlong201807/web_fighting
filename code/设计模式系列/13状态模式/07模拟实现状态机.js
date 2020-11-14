
// let StateMachine = require('javascript-state-machine');

class StateMachine{
  constructor(options) {
    // init 定义初始状态，transitions 定义转换规则，methods 定义监听函数
    let { init = '', transitions = [], methods = {} } = options
    this.state = init
    transitions.forEach(transition => {
      let { from, to, name } = transition
      this[name] = function () {
        if (this.state === from) {
          this.state = to
          let onMethod = 'on' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
          methods[onMethod] && methods[onMethod]()
        }
      }
    })
  }
}

var fsm = new StateMachine({
  init: 'solid',
  transitions: [
    { name: 'melt',     from: 'solid',  to: 'liquid' },
    { name: 'freeze',   from: 'liquid', to: 'solid'  },
    { name: 'vaporize', from: 'liquid', to: 'gas'    },
    { name: 'condense', from: 'gas',    to: 'liquid' }
  ],
  methods: {
    onMelt:     function() { console.log('I melted')    },
    onFreeze:   function() { console.log('I froze')     },
    onVaporize: function() { console.log('I vaporized') },
    onCondense: function() { console.log('I condensed') }
  }
});

// 使用 // 符合此时的初始状态
fsm.melt() // I melted
fsm.freeze() // I froze

// 学习更多细节
// http://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html
