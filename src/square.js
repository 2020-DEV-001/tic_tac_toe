import React from 'react';
import './index.css';

export default class Square extends React.Component {
    render() {
        return (
            //Change Squares render method to show that value 
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}