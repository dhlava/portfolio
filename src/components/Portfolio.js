import React, { Component } from 'react';
import './portfolio.css';
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
    render(){
        return(
            <section id="portfolio" className="page_section portfolio_container">
                <div className="content portfolio_content">
                    <h2 className="section_title"><span>Notable projects</span></h2>
                    <div className="section_content portfolio_items">
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