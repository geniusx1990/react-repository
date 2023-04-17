import { ICard } from '../types/interfaces';

function Card(props: ICard) {
  return (
    <div className="product_item">
      <h2 className="product_title">{props.title}</h2>
      <img className="product_image" src={props.thumbnail} alt={props.title} />
      <div className="card-description">
        <span className="category">{props.category}</span>
        <span className="brand-name">{props.brand}</span>
        <span className="discount">{`date -${props.date}`}</span>
      </div>
      <div className="card-price-container">
        <span className="add-to-cart" />
      </div>
    </div>
  );
}

export default Card;
