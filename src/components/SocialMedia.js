import React, { Component } from 'react';
import './socialmedia.css';


class SocialMedia extends Component {
    mapIcon(network){
        if (network === "email") {
            return (
                <i className="fa fa-envelope fa-3x"/>
            );
        }
        return (
            <i className={`fa fa-${network} fa-3x`}/>
        );
    }
    render() {
        const displayClass = this.props.displayStyle ? `socialmedia_list_${this.props.displayStyle}` : '';        
        return (
            <ul className={`socialmedia_list ${displayClass}`}>
                {this.props.profiles.map((profile, index) =>
                    <li key={index}>
                        <a href={profile.network.toLowerCase() === 'email' ? `mailto:${profile.url}` : profile.url}>{this.mapIcon(profile.network.toLowerCase())}{this.props.showUsername ? profile.username : ''}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default SocialMedia;