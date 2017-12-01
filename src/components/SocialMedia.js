import React from 'react';

const SocialMedia = (props) => {
    return (
        <ul>
            {props.profiles.map((profile, index) => 
                <li key={index}><a href={profile.url}>{profile.network}</a></li>
            )}
        </ul>
    );
};

export default SocialMedia;