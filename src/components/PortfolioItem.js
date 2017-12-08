import React, { Component } from 'react';

class PortfolioItem extends Component {
    render() {
        return (
            <div className="portfolio_item_wrap">
                <div className="portfolio_item">
                    <img src={this.props.item.images[0].url} alt="Arrow Electronics Inc. - eCommerce" />
                    <div className="item_overlay">
                        <h3>{this.props.item.name}</h3>
                        <p class="expand_text">View details</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;