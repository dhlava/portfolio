import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <header className="page_section header">
                <div className="section_content header_content">
                    <Logo name={this.props.basics.name} label={this.props.basics.label} />
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;