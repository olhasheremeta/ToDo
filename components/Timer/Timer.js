import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
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
    const mins = parseInt(this.minutes.value || 0)
    const secs = parseInt(this.seconds.value || 0)

    if (mins === 0 && secs === 0) return

    clearInterval(this.interval)
    this.interval = setInterval(this.decreaseTime, 1000);

    this.setState({
      seconds: mins * 60 + secs
    })

    this.seconds.value = 0;
    this.minutes.value = 0;
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ seconds: 0 });
  }

  render() {
    return (
      <div className="Timer">
        <div className="inputHolder">
          <Input
            Type="number"
            Min="0"
            Max="59"
            DefaultValue="0"
            Ref={(input) => { this.minutes = input; }}
          />
          <span>min.</span>

          <Input
            Type="number"
            Min="0"
            Max="59"
            DefaultValue="0"
            Ref={(input) => { this.seconds = input; }}
          />
          <span>sec.</span>
        </div>
        <div className="showTimer">
          <span id='timerSpan'>{parseSeconds(this.state.seconds)}</span>
        </div>
        <div>
          <Button OnClick={this.startTimer}>Start</Button>
          <Button OnClick={this.stopTimer}>Stop</Button>
        </div>
      </div>
    );
  }
}

export default Timer;