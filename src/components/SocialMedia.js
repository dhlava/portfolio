import React from 'react';
import './socialmedia.css';

const SocialMedia = (props) => {
    return (
        <ul className="socialmedia_list">
            {props.profiles.map((profile, index) => 
                <li key={index}><a href={profile.url}>{profile.network}</a></li>
            )}
        </ul>
    );
};

export default SocialMedia;