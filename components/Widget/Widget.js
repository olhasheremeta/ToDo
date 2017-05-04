import React from 'react';

import './Widget.scss'

class Widget extends React.Component {
  render() {
    return (
      <div className="Widget">
        { this.props.children }
      </div>
    );
  }
}
export default Widget;