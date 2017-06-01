import React from 'react';
import Button from '../Button/Button';

import './Widget.scss'

class Widget extends React.Component {
  state = {
    isRunning: false
  }

  start = () => {
    this.setState({
      isRunning: true
    });
  }

  render() {
    return (
      <div className="Widget">
        <div className="Widget-title">{this.props.title}</div>
        <div className="Widget-body">
          {
            this.state.isRunning
             ? this.props.children
             : (
              <div className="Widget-body-overlay">
                <Button OnClick={this.start} className="Start-btn">Start</Button>
              </div>
             )
          }          
          </div>
      </div>
    );
  }
}
export default Widget;