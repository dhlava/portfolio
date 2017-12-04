import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
    render() {
        return (
            <section className="page_section experience_section">
                <div className="content experience_content">
                    <h2 className="section_title">What I've Done</h2>
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