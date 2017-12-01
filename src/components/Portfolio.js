import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
    render(){
        return(
            <section className="portfolio_container page_section">
                <div className="portfolio_items">
                    {this.props.work.map((item, index) => 
                        <PortfolioItem key={index} item={item} />
                    )}
                </div>
            </section>
        );
    }
}

export default Portfolio;