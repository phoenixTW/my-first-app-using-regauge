import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends Component {
    render() {
        const { title, description } = this.props;
        return (
            <div className="card__wrapper">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

Card.defaultProps = {
    description: ''
};

export default Card;
