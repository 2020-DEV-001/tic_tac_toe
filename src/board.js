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

      handleClick(counter) {
       //function to flip the value of xIsNext:
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[counter]) {
          return;
        }
        squares[counter] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
   
     
      addSquare(counter) {
        return (<Square value={this.state.squares[counter]} onClick={() => this.handleClick(counter)}/>);
      }
    
      render() {
       //Code to display player 
        const gameStatus = calculateWinner(this.state.squares);
       
       //Condition to check game status i.e winner , draw and player
      let status;
      const draw ="draw";
      if(gameStatus && gameStatus != draw){
          status = 'Winner: ' + gameStatus;
      } else if (gameStatus && gameStatus === draw){
          status = "Game is " + gameStatus;
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
  const blocks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let counter = 0; counter < blocks.length; counter++) {
    const [column1, column2, column3] = blocks[counter];
   
    // populating the block indexes
    if (squares[column1] && squares[column1] === squares[column2] && squares[column1] === squares[column3]) {
      return squares[column1];
    }
    else if(!squares.includes(null)){
      return 'draw';
    }
  }
  return null;
}