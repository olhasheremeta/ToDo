import React from 'react';

import './Button.scss';

class Button extends React.Component {
  
  render() {
    return (
      <button className="Button" onClick={this.props.OnClick}>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export default Button;
