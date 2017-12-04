import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import './personal.css';


class Personal extends Component {
    render(){
        return(
            <section className="page_section personal_container">
                <div className="content personal_content">
                    <div className="about_me">
                        <div className="portrait"></div>
                        <p>{this.props.basics.summary}</p>
                    </div>
                    <div className="contact_details">
                        <h3>Contact Details</h3>
                        <SocialMedia profiles={this.props.basics.profiles} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Personal;