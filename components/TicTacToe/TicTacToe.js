import React from 'react';
import Button from '../Button/Button';

import './TicTacToe.scss';

class TicTacToe extends React.Component {


  render() {
    return (
      <div className="TicTacToe">
        <div className="TicTacToe-grid">
          <div className="TicTacToe-column">
            <div className="TicTacToe-cell">
              <span>1</span>
            </div>
            <div className="TicTacToe-cell">
              <span>2</span>
            </div>
            <div className="TicTacToe-cell">
              <span>3</span>
            </div>
          </div>
          <div className="TicTacToe-column">
            <div className="TicTacToe-cell">
              <span>4</span>
            </div>
            <div className="TicTacToe-cell">
              <span>5</span>
            </div>
            <div className="TicTacToe-cell">
              <span>6</span>
            </div>
          </div>
          <div className="TicTacToe-column">
            <div className="TicTacToe-cell">
              <span>7</span>
            </div>
            <div className="TicTacToe-cell">
              <span>8</span>
            </div>
            <div className="TicTacToe-cell">
              <span>9</span>
            </div>
          </div>
        </div>
        <div className="TicTacToe-controls">
          <Button>Start</Button>
          <span>X turn</span>
        </div>
      </div>
    )
  }
}

export default TicTacToe;