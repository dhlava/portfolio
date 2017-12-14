import React, { Component } from 'react';
import './button.css';


class Button extends Component {
    render() {
        return (
            <button onClick={this.props.clickHandler} className="button">
                {this.props.children}
            </button>
        );
    }
}

export default Button;