import React from 'react';

import './Button.scss';

class Button extends React.Component {
  
  render() {
    return(
      <button className="Button" onClick={this.props.OnClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
