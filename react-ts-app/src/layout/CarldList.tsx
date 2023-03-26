import React from 'react';
import Card from './Card';

import productList from './productList';

class CardList extends React.Component {
  render() {
    return (
      <div className="cards">
        {productList.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            price={item.price}
            discount={item.discountPercentage}
            brand={item.brand}
            category={item.category}
            thumbnail={item.thumbnail}
            rating={item.rating}
            stock={item.stock}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
