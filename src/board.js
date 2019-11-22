import React from 'react';
import './index.css';
import Square from './square';


    // Constructor added to the Board and the initial state to contain an array of
    // 9 nulls corresponding to the 9 squares
   
export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }



Square(props) {
        return (
          <button className="square" onClick={props.onClick}>
            {props.value}
          </button>
        );
      }

      handleClick(i) {
       //function to flip the value of xIsNext:
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
   
     
      addSquare(i) {
        return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
      }
    
      render() {
       //Code to display player 
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div id="game-info">
               <div className="status">{status}</div>
                <div className="board-row">
                    {this.addSquare(0)}{this.addSquare(1)}{this.addSquare(2)}
                </div>
                <div className="board-row">
                    {this.addSquare(3)}{this.addSquare(4)}{this.addSquare(5)}
                </div>
                <div className="board-row">
                    {this.addSquare(6)}{this.addSquare(7)}{this.addSquare(8)}
                </div>
            </div>
        );
    }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}