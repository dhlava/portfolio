import React, { Component } from 'react';


const RoleList = (props) => {
    return (
        <ul className="role_list">
            {props.highlights.map( (highlight, index) =>
                <li key={index}>{highlight}</li>
            )}
        </ul>
    );
};

class PortfolioItem extends Component {
    render() {
        return (
            <article className="portfolio_item">
                <img src="images/portfolio/arrow.jpg" alt="Arrow Electronics Inc. - eCommerce" />
                <div className="item_text">
                    <h3><a href={this.props.item.url}>{this.props.item.name}</a></h3>
                    <h4>{this.props.item.position}</h4>
                    <p>{this.props.item.summary}</p>
                    <RoleList highlights={this.props.item.highlights} />
                </div>
            </article>
        );
    }
}

export default PortfolioItem;