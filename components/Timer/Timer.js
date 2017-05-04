import React from 'react';

import './Timer.scss'

class Timer extends React.Component {
  state = {
    mins: 0,
    secs: 0
  }

  decreaseTime = () => {
    this.setState({
      secs: this.state.secs-1
    });
    if (this.state.secs === 0) {
      clearInterval(this.interval);
    }
  }

  startTimer = () => {
    this.setState({
      mins: this.minutes.value,
      secs: this.seconds.value
    })

    clearInterval(this.interval)
    this.interval = setInterval(this.decreaseTime, 1000); 

    this.seconds.value = '';
  }


  render(){
    return(
      <div className="Timer">
        <input type="number" min="0" max="59" placeholder="0" 
        ref={(input) => { this.minutes = input; }}/>
        <input type="number" min="0" max="59" placeholder="0"
        ref={(input) => { this.seconds = input; }}/>
        <span>{this.state.mins + ':' + this.state.secs}</span>
        <button onClick={this.startTimer}>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}
export default Timer;