import React from 'react';
import { ICard } from '../types/interfaces';

class Card extends React.Component<ICard> {
  render() {
    return (
      <div className="product_item">
        <h2 className="product_title">{this.props.title}</h2>
        <img className="product_image" src={this.props.thumbnail} alt={this.props.title} />
        <div className="card-description">
          <span className="category">{this.props.category}</span>
          <span className="brand-name">{this.props.brand}</span>
          <span className="discount">{`date -${this.props.date}`}</span>
        </div>
        <div className="card-price-container">
          <span className="add-to-cart" />
        </div>
      </div>
    );
  }
}

export default Card;
