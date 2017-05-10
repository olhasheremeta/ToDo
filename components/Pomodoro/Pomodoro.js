import React from 'react';

import Dropdown from '../Dropdown/Dropdown';

import parseSeconds from '../../utils/parseSeconds';

import './Pomodoro.scss'

const focused = 10;
const relaxed = 4;

class Pomodoro extends React.Component {

  state = {
    time: focused,
    type: 'focused'
  }

  switchType = () => {
    let time = focused;
    let type = 'focused';

    if (this.state.type === 'focused') {
      time = relaxed
      type = 'relaxed'
    }

    this.setState({
      time: time,
      type: type
    })
  }

  timeCountdown = () => {
    if (this.state.time === 0) {
      this.switchType();
    } else {
      this.setState({
        time: this.state.time - 1
      });
    }
  }

  startTimer = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.timeCountdown, 1000);
  }

  pauseTimer = () => {
    clearInterval(this.interval);
  }

  resetTimer = () => {
    clearInterval(this.interval);
    this.setState({
      time: focused,
      type: 'focused'
    })
  }

  render() {
    return (
      <div className="Pomodoro">
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Stop</button>
        </div>
        <div>
          <span>{parseSeconds(this.state.time)}</span>
        </div>
        <Dropdown />
      </div>
    )
  }
}

export default Pomodoro;
