import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Button from './Button';

class PortfolioItem extends Component {
    constructor(){
        super();
        this.state = {
            modalOpen: false
        }

        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalOpen(){
        this.setState({modalOpen: true});
    }

    handleModalClose(){
        this.setState({modalOpen: false});
    }

    render() {
        return (
            <div className="portfolio_item_wrap">
                <div onClick={this.handleModalOpen} className="portfolio_item">
                    <img src={this.props.item.images[0].url} alt={this.props.item.name} />
                    <div className="item_overlay">
                        <h3>{this.props.item.name}</h3>
                        <p className="expand_text">View details</p>
                    </div>
                </div>
                <Modal little showCloseIcon={false} classNames={{modal: 'portfolio_modal_container'}} open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <img src={this.props.item.images[1].url} alt="" />
                    <div className="portfolio_description_content">
                        <h3>{this.props.item.name}</h3>
                        <h4>{this.props.item.type}</h4>
                        <p>{this.props.item.description}</p>
                    </div>
                    <Button clickHandler={this.handleModalClose}>Close</Button>
                </Modal>
            </div>
        );
    }
}

export default PortfolioItem;