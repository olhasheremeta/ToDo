import React from 'react';
import Button from '../Button/Button';


import './Counter.scss';

class Counter extends React.Component {
  state = {
    counter: 0
  }

  increaseCount = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };

  decreaseCount = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  };

  resetCount = () => {
    this.setState({
      counter: 0
    })
  };

  render() {
    return (
      <div className="Counter">
        <div>
          <span className="Counter-value">{this.state.counter}</span>
        </div>
        <div className="ButtonContainer">
          <Button OnClick={this.increaseCount}>+</Button>
          <Button OnClick={this.decreaseCount}>-</Button>
        </div>
        <div className="ButtonContainer">
          <Button OnClick={this.resetCount}>Reset</Button>
        </div>
      </div>
    );
  }
}

export default Counter;