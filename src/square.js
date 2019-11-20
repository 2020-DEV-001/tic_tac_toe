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
            //Code modified to check if the square is clicked
            <button className="square" onClick={function() { alert('Square is clicked'); }}>
            {this.props.value}
          </button>);
    }
}