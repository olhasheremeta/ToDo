import React from 'react';
import Button from '../Button/Button';

import './Widget.scss'

class Widget extends React.Component {

  handleStart = () => {
    this.props.start(this.props.id)
  }
  
  render() {
    return (
      <div className="Widget">
        <div className="Widget-title">{this.props.title}</div>
        <div className="Widget-body">
          {
            this.props.isRunning
             ? this.props.children
             : (
              <div className="Widget-body-overlay">
                <Button OnClick={this.handleStart}>Start</Button>
              </div>
             )
          }          
          </div>
      </div>
    );
  }
}
export default Widget;