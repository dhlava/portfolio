import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
    render() {
        return (
            <section className="page_section experience_container">
                <div className="section_content experience_content">
                    <div className="section_title"><h2>What I've Done</h2></div>
                    <div className="section_content">
                        {this.props.work.map((item, index) =>
                            <ExperienceItem key={index} item={item} />
                        )}
                    </div>
                </div>
            </section>      
        );
    }
}

export default Experience;