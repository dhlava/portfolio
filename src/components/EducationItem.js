import React, { Component } from 'react';
import Moment from 'moment';

class EducationItem extends Component {
    render() {
        return (
            <div className="resume_item education_item">
                <h3><a href="https://www.purdue.edu">{this.props.item.institution}</a></h3>
                <div className="item_details">
                    <div className="item_details_title">{this.props.item.studyType} in {this.props.item.area}</div>
                    {this.props.item.institutionLocation} &bull; {Moment(this.props.item.startDate).format("MMMM YYYY")} - {Moment(this.props.item.endDate).format("MMMM YYYY")}
                    <ul className="highlight_list">
                        <li className="highlight">{this.props.item.gpa}</li>
                        <li className="highlight">{this.props.item.other}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default EducationItem;