import React, { Component } from 'react'

class Bomb extends Component {

  state = {
    secondsLeft: this.props.initialCount
  }

  countdown = () => {
    if (this.state.secondsLeft >= 1) {
      setTimeout(() => {
        const newTime = this.state.secondsLeft - 1
        this.setState({
          secondsLeft: newTime
        })
      }, 1000)
    }

    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>
        {this.countdown()}
      </div>
    )
  }
}

export default Bomb
