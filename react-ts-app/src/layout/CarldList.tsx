import { ICardItem, ICardList } from '../types/interfaces';
import CardItem from './CardItem';

function CardList({ itemList }: ICardList) {
  console.log(itemList);
  return (
    <div className="cards">
      {!itemList.length ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        itemList.map((item: ICardItem) => <CardItem card={item} key={item.id} />)
      )}
    </div>
  );
}

export default CardList;
