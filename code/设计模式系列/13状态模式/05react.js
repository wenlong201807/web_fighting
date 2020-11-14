const State = {
  show: function () {
    console.log('显示Banner')
    this.setState({currentState:'hide'})
  },
  hide: function () {
    console.log('隐藏Banner')
    this.setState({currentState:'show'})
  },
}

class Banner extends React.component{
  state = { currentState: 'show' }
  toggle = () => {
    let s = this.state.currentState
    States[s] && State[s].apply(this)
  }
  
  render () {
    return (
      <div>
        {this.state.currentState == 'show' && <nav>导航</nav>}
        <button onClick={this.toggle}>toggle</button>
      </div>
    )
  }
}