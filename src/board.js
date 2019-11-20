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

      handleClick(i) {
       //function to flip the value of xIsNext:
        const squares = this.state.squares.slice();
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
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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