import React, { Component } from 'react';
import './skills.css';

export const SkillList = (props) => {
    return (
        <ul className="skill_list">
            {props.skillset.keywords.map((keyword, index) =>
                <li key={index} className="skill">{keyword}</li>
            )}
        </ul>
    );
};

class Skills extends Component {
    render() {
        return (
            <section id="skills" className="page_section skills_container">
                <div className="content skills_content">
                    <h2 className="section_title"><span>What I Know</span></h2>
                    <div className="section_content">
                        {this.props.skillGroup.map((skillGroup, index) =>
                            <div key={index} className="resume_item skills_item">
                                <h3>{skillGroup.name}</h3>
                                <SkillList skillset={skillGroup} />
                            </div>
                        )}
                    </div>
                </div>
            </section>      
        );
    }
}

export default Skills;