import React, { Component } from 'react';
import './logo.css';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <h1>{this.props.name}</h1>
                <h2>{this.props.label}</h2>
            </div>
        );
    }
}

export default Logo;