import React, { PropTypes } from 'react';

import './PomodoroSettings.scss';

class PomodoroSettings extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    pomodoro: PropTypes.number,
    brake: PropTypes.number
  };

  state = {
    isOpen: false
  };

  openSettings = () => {
    this.setState({
      isOpen: true
    });
  };

  handleSubmit = () => {
    const pomodoro = parseInt(this.pomodoroInput.value);
    const brake = parseInt(this.brakeInput.value);
    
    this.props.onSubmit(pomodoro, brake);
    
    this.close()
   };

  handleCancel = () => {
    this.close()
  }

  close = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const classes = `PomodoroSettings-body ${this.state.isOpen ? ' isOpen' : ''}`

    return (
      <div className="PomodoroSettings">
        <button
          className="PomodoroSettings-button"
          onClick={this.openSettings}
        >
          Settings
        </button>
        <div className={classes}>
          <div>
            <span>Pomodoro time</span><br/>
            <input 
              type="number"
              defaultValue={this.props.pomodoro} 
              min="0"
              ref={(input) => { this.pomodoroInput = input }}
            />
            <span>min.</span>
          </div>
          <div>
            <span>Break time</span><br/>
            <input 
              type="number"
              defaultValue={this.props.brake}
              min="0"
              ref={(input) => { this.brakeInput = input }}
             />
            <span>min.</span>
          </div>
          <button onClick={this.handleCancel}>Cancel</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default PomodoroSettings;