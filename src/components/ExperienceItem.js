import React, { Component } from 'react';

const HighlightList = (props) => {
    return (
        <ul>
            {props.highlights.map((highlight,index) =>
                <li key={index}>{highlight}</li> 
            )}
        </ul>
    );
};


class ExperienceItem extends Component {
    render() {
        return (
            <div className="experience_item">
                <h3>{this.props.item.name}</h3>
                {this.props.item.position} - {this.props.item.location} - {this.props.item.startDate} - {this.props.item.endDate}  
                <HighlightList highlights={this.props.item.highlights} />
            </div>
        );
    }
}

export default ExperienceItem;