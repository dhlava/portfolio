import React, { Component } from 'react';
import Navigation from './Navigation';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="page_section header">
                <div className="content header_content">
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;