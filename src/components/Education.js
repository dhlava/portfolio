import React, { Component } from 'react';
import EducationItem from './EducationItem';

class Education extends Component {
    render() {
        return (
            <section className="page_section education_container">
                <div className="content education_content">
                    <h2 className="section_title">Education</h2>
                    <div className="section_content">
                        {this.props.education.map((item, index) =>
                            <EducationItem key={index} item={item} />
                        )}
                    </div>
                </div>
            </section>      
        );
    }
}

export default Education;