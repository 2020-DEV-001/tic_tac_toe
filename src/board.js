import React from 'react';
import './index.css';
import Square from './square';

export default class Board extends React.Component {
    addSquare(i) {
        //code to pass a prop called value to the Square
        return <Square value={i}/>;
    }

    render() {
        const status = 'Player: X';
        return (
            <div id="game-info">
                <div className="status" >
                {status}
                </div>
                <div className="board-row">
                    {this.addSquare(0)}
                    {this.addSquare(1)}
                    {this.addSquare(2)}
                </div>
                <div className="board-row">
                    {this.addSquare(3)}
                    {this.addSquare(4)}
                    {this.addSquare(5)}
                </div>
                <div className="board-row">
                    {this.addSquare(6)}
                    {this.addSquare(7)}
                    {this.addSquare(8)}
                </div>
            </div>
        );
    }
}