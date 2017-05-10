import React from 'react';

import './Dropdown.scss';

class Dropdown extends React.Component {
  state = {
    isOpen: false
  }

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const classes = `Dropdown-body ${this.state.isOpen ? ' isOpen' : ''}`

    return (
      <div className={`Dropdown ${this.props.alignTo}`}>
        <button
          className="Dropdown-button"
          onClick={this.toggleDropdown}
        >
          Settings
        </button>
        <div className={classes}>Here will be my settings</div>
      </div>
    );
  }
}

export default Dropdown