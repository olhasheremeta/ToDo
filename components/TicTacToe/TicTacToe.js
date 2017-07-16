import React from 'react';
import Button from '../Button/Button';

import './TicTacToe.scss';

class TicTacToe extends React.Component {
  state = {
    gameField: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    turn: 'X',
    isPlaying: true,
    winner: null
  }

  handleCellClick = (column, row) => () => {
    const gameFieldCopy = JSON.parse(JSON.stringify(this.state.gameField));
    gameFieldCopy[column][row] = this.state.turn;
    
    const isFinished = this.isFinished(gameFieldCopy)

    this.setState({
      gameField: gameFieldCopy,
      turn: this.state.turn === 'X' ? 'O' : 'X',
      isPlaying: !isFinished,
      winner: isFinished && this.state.turn
    })

  }

  renderCell(column, row) {
    const value = this.state.gameField[column][row];
    const classes = `TicTacToe-cell ${value || !this.state.isPlaying ? 'disabled' : '' }`

    return (
      <div 
        className={classes}
        key={row}
        onClick={!value && this.state.isPlaying && this.handleCellClick(column, row)}
      >
        <span>{value}</span>
      </div>
    )
  }

  renderColumn(column) {
    return (
      <div className="TicTacToe-column" key={column}>
        {
          [0, 1, 2].map((row) => this.renderCell(column, row))
        }
      </div>
    )
  }

  areMatching(val1, val2, val3) {
    if (!val1 || !val2 || !val3) return false
    return val1 === val2 && val2 === val3;
  }

  isFinished = (gameField) => {
    let cel_1 = gameField[0][0];
    let cel_2 = gameField[0][1];
    let cel_3 = gameField[0][2];
    let cel_4 = gameField[1][0];
    let cel_5 = gameField[1][1];
    let cel_6 = gameField[1][2];
    let cel_7 = gameField[2][0];
    let cel_8 = gameField[2][1];
    let cel_9 = gameField[2][2];

    if(
      this.areMatching(cel_1, cel_2, cel_3) ||
      this.areMatching(cel_4, cel_5, cel_6) ||
      this.areMatching(cel_7, cel_8, cel_9) ||
      this.areMatching(cel_1, cel_4, cel_7) ||
      this.areMatching(cel_2, cel_5, cel_8) ||
      this.areMatching(cel_3, cel_6, cel_9) ||
      this.areMatching(cel_1, cel_5, cel_9) ||
      this.areMatching(cel_3, cel_5, cel_7)
    ) {
        return true
      }
    return false;
  }

  render() {
    return (
      <div className="TicTacToe">
        <div className="TicTacToe-grid">
          {
            [0, 1, 2].map((column) => this.renderColumn(column))
          }
        </div>
        <div className="TicTacToe-controls">
          {
            this.state.isPlaying 
            ? <span>{`${this.state.turn}'s turn`}</span>
            : <span>{`${this.state.winner} WON!!!`}</span>
          }
        </div>
      </div>
    )
  }
}

export default TicTacToe;
