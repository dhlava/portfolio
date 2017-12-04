import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="page_section header">
                <div className="content header_content">
                    <Logo name={this.props.basics.name} label={this.props.basics.label} />
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;