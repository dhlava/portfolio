import React, { Component } from 'react';
import Moment from 'moment';

const HighlightList = (props) => {
    return (
        <ul className="highlight_list">
            {props.highlights.map((highlight,index) =>
                <li key={index} className="highlight">{highlight}</li> 
            )}
        </ul>
    );
};


class ExperienceItem extends Component {
    render() {
        return (
            <div className="resume_item experience_item">
                <h3><a href={this.props.item.url}>{this.props.item.name}</a></h3>
                <div className="item_details">
                    <div className="item_details_title">{this.props.item.position}</div>
                    {this.props.item.location} &bull; {Moment(this.props.item.startDate).format("MMMM YYYY")} - {Moment(this.props.item.endDate).format("MMMM YYYY")}
                </div>
                <HighlightList highlights={this.props.item.highlights} />
            </div>
        );
    }
}

export default ExperienceItem;