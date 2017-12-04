import React, { Component } from 'react';

class EducationItem extends Component {
    render() {
        return (
            <div className="resume_item education_item">
                <h3>{this.props.item.institution}</h3>
                {this.props.item.studyType} in {this.props.item.area} | {this.props.item.startDate} - {this.props.item.endDate}
                {this.props.item.gpa}
            </div>
        );
    }
}

export default EducationItem;