import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Logo from './Logo';
import './personal.css';


class Personal extends Component {
    render(){
        return(
            <section id="about" className="page_section personal_container">
                <div className="content personal_content">
                    <Logo name={this.props.basics.name} label={this.props.basics.label} />
                    <div className="about_me">
                        <div className="portrait"></div>
                        <p>{this.props.basics.summary}</p>
                    </div>
                    <div className="contact_details">
                        <SocialMedia profiles={this.props.basics.profiles} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Personal;