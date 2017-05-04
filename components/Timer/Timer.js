import React from 'react';

import parseSeconds from '../../utils/parseSeconds';

import './Timer.scss'

class Timer extends React.Component {
  state = {
    seconds: 0
  }

  playEndSound() {
    var audio = new Audio('http://newt.phys.unsw.edu.au/music/bellplates/sounds/equilateral_plate_no_second_partial.mp3');
    audio.play();
  }

  decreaseTime = () => {
    if (this.state.seconds === 0) {
      clearInterval(this.interval);
      this.playEndSound();
    } else {
      this.setState({
        seconds: this.state.seconds - 1
      });
    }
  }

  startTimer = () => {
    clearInterval(this.interval)
    this.interval = setInterval(this.decreaseTime, 1000);

    this.setState({
      seconds: parseInt(this.minutes.value || 0) * 60 + parseInt(this.seconds.value)
    })

    this.seconds.value = '';
    this.minutes.value = '';
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ seconds: 0 });
  }

  render() {
    return (
      <div className="Timer">
        <div>
          <input
            type="number"
            min="0"
            max="59"
            placeholder="0"
            ref={(input) => { this.minutes = input; }}
          />

          <input
            type="number"
            min="0"
            max="59"
            placeholder="0"
            ref={(input) => { this.seconds = input; }}
          />
        </div>
        <div>
          <span id='timerSpan'>{parseSeconds(this.state.seconds)}</span>
        </div>
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.stopTimer}>Stop</button>
        </div>
      </div>
    );
  }
}

export default Timer;