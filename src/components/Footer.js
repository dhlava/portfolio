import React, { Component } from 'react';
import './footer.css';
import SocialMedia from './SocialMedia';

class Footer extends Component {
    render() {
        return (
            <footer className="page_section footer">
                <div className="content footer_content">
                    <SocialMedia profiles={this.props.basics.profiles} />
                </div>
            </footer>
        );
    }
}

export default Footer;