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
            //<button className="square" onClick={function() { alert('Square is clicked'); }}>
            //Code modified for updating child component
          //   <button
          //   className="square"
          //   onClick={() => this.setState({value: 'X'})}
          // >
          //   {this.state.value}
          // </button>);
          <button
          className="square"
          onClick={() => this.props.onClick()}>
                  {this.props.value}
        </button>);
    }
}