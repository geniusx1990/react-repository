/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { ICard } from '../types/interfaces';

class Card extends React.Component<ICard> {
    render() {
        return (
            <div className="product_item">
                <h2 className="product_title">{this.props.title}</h2>
                <img
                    className="product_image"
                    src={this.props.thumbnail}
                    alt={this.props.title}
                />
                <div className="card-description">
                    <span className="category">{this.props.category}</span>
                    <span className="brand-name">{this.props.brand}</span>
                    <h4 className="price">{`$${this.props.price}`}</h4>
                    <span className="discount">{`Sale -${this.props.discount}%`}</span>
                    <span className="rating">{this.props.rating}</span>
                </div>
                <div className="card-price-container">
                    <p className="card-in-stock">
                        In stock: {this.props.stock}
                    </p>
                    <span className="add-to-cart" />
                </div>
            </div>
        );
    }
}

export default Card;
