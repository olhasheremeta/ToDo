import React from 'react';

import PomodoroSettings from './PomodoroSettings';

import parseSeconds from '../../utils/parseSeconds';

import './Pomodoro.scss'

class Pomodoro extends React.Component {

  state = {
    time: 0,
    type: 'pomodoro',
    pomodoro: 10,
    brake: 4,
    isRunning: false
  }

  switchType = () => {
    let time = this.state.pomodoro * 60;
    let type = 'pomodoro';

    if (this.state.type === 'pomodoro') {
      time = this.state.brake * 60
      type = 'brake'
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

    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
        time: this.state.pomodoro * 60
      })
    }
  }

  pauseTimer = () => {
    clearInterval(this.interval);
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false,
      time: this.state.pomodoro * 60,
      type: 'pomodoro'
    })
  }

  submitSettings = (pomodoro, brake) => {
    this.setState({
      pomodoro: pomodoro,
      brake: brake
    })
  }

  render() {
    return (
      <div className="Pomodoro">
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
        <div>
          <span>
            {parseSeconds(this.state.isRunning ? this.state.time : this.state.pomodoro * 60)}
          </span>
        </div>
        <PomodoroSettings
          onSubmit={this.submitSettings}
          pomodoro={this.state.pomodoro}
          brake={this.state.brake}
        />
      </div>
    )
  }
}

export default Pomodoro;
