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
            discount={item.discount}
            brand={item.brand}
            category={item.category}
            thumbnail={item.thumbnail}
            date={item.date}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
