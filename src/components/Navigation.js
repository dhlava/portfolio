import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="main_navigation">
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#ipl_contact">What I've Done</a></li>
                    <li><a href="#ipl_contact">What I Know</a></li>
                    <li><a href="#ipl_contact">Education</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="Dustin_Hlava_Resume.pdf">Download PDF</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;