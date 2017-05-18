import React from 'react';

import './Input.scss';

class Input extends React.Component {

  render() {
    return(
      <input 
      className="Input"
      type = {this.props.Type}
      min = {this.props.Min}
      max = {this.props.Max}
      defaultValue = {this.props.DefaultValue}
      ref = {this.props.Ref}
      />
    );
  }
}

export default Input;