import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import portrait from '../images/portrait.jpg';

class Personal extends Component {
    render(){
        return(
            <section className="page_section personal_container">
                <div class="section_content personal_content">
                    <div className="about_me">
                        <h3>About Me</h3>
                        <img src={portrait} alt="Dustin Hlava" />
                        <p>{this.props.basics.summary}</p>
                    </div>
                    <div className="contact_details">
                        <h3>Contact Information</h3>
                        <ul>
                            <li><strong>Location: </strong>{this.props.basics.location.city}, {this.props.basics.location.region}</li>
                            <li><strong>Email: </strong><a href="mailto:dhlava@gmail.com">{this.props.basics.email}</a></li>
                        </ul>
                        <SocialMedia profiles={this.props.basics.profiles} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Personal;