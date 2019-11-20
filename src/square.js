import React from 'react';
import './index.css';

export default class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render() {
        return (
            //Change Squares render method to show that value 
            <button type="button" className="square" onClick={this.handleClick}>
                {this.state.value}
            </button>
        );
    }
}