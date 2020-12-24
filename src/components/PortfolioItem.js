import React, { Component, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Button from './Button';

const PortfolioItem = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="portfolio_item_wrap">
            <div onClick={onOpenModal} className="portfolio_item">
                <img src={props.item.images[0].url} alt={props.item.name} />
                <div className="item_overlay">
                    <h3>{props.item.name}</h3>
                    <p className="expand_text">View details</p>
                </div>
            </div>
            <Modal little showCloseIcon={false} classNames={{modal: 'portfolio_modal_container'}} open={open} onClose={onCloseModal}>
                <img src={props.item.images[1].url} alt="" />
                <div className="portfolio_description_content">
                    <h3>{props.item.name}</h3>
                    <h4>{props.item.type}</h4>
                    <p>{props.item.description}</p>
                </div>
                <Button clickHandler={onCloseModal}>Close</Button>
            </Modal>
        </div>
    );
}

export default PortfolioItem;