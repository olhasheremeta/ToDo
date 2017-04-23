import React from 'react';

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
        <div className="ButtonContainer"> 
          <button className="Counter-button" onClick={this.increaseCount}>+</button>
          <div>
            <span className="Counter-value">{this.state.counter}</span>
          </div>
          <button className="Counter-button" onClick={this.decreaseCount}>-</button>
        </div>
        <div className="ButtonContainer">
          <button className="Counter-button" onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;