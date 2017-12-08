import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = { isOpen: false };
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation = () => {
        this.setState({
            isOpen: !this.state.isOpen
          });
    }

    render() {
        return (
            <nav className="main_navigation">
                <button className="nav_toggle" onClick={this.toggleNavigation}><i className="fa fa-bars fa-3x" /></button>
                <ul className={this.state.isOpen ? "nav_open": ""}>
                    <li><a onClick={this.toggleNavigation} href="#about">About Me</a></li>
                    <li><a onClick={this.toggleNavigation} href="#experience">What I've Done</a></li>
                    <li><a onClick={this.toggleNavigation} href="#skills">What I Know</a></li>
                    <li><a onClick={this.toggleNavigation} href="#education">Education</a></li>
                    {/* <li><a onClick={this.toggleNavigation} href="#portfolio">Portfolio</a></li> */}
                    <li><a onClick={this.toggleNavigation} href="resume/Dustin_Hlava_Resume.pdf">Download PDF</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;