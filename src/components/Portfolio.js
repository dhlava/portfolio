import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio" className="page_section portfolio_section">
                <div className="content portfolio_content">
                    <h2 className="section_title">Other projects</h2>
                    <div className="section content portfolio_items">
                        {this.props.work.map((item, index) => 
                            <PortfolioItem key={index} item={item} />
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;