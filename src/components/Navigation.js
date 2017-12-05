import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="main_navigation">
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">What I've Done</a></li>
                    <li><a href="#skills">What I Know</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="/resume/Dustin_Hlava_Resume.pdf">Download PDF</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;