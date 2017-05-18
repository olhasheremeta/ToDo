import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

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
        <Button OnClick={this.openSettings}>Settings</Button>
        <div className={classes}>
          <div className="pomodoroInputHolder">
            <span className="label">Pomodoro time:</span><br/>
            <Input 
              Type="number"
              DefaultValue={this.props.pomodoro} 
              Min="0"
              Ref={(input) => { this.pomodoroInput = input }}
            />
            <span className="min">min.</span>
          </div>
          <div className="brakeInputHolder">
            <span className="label">Break time:</span><br/>
            <Input 
              Type="number"
              DefaultValue={this.props.brake}
              Min="0"
              Ref={(input) => { this.brakeInput = input }}
             />
            <span className="min">min.</span>
          </div>
          <Button OnClick={this.handleCancel}>Cancel</Button>
          <Button OnClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default PomodoroSettings;