import React, { Component } from 'react';
import './logo.css';

class Logo extends Component {
    
    render() {
        return (
            <div className="logo">
                <h1>{this.props.name.split(' ')[0]}<span>{this.props.name.split(' ')[1]}</span></h1>
                <h2>{this.props.label}</h2>
            </div>
        );
    }
}

export default Logo;