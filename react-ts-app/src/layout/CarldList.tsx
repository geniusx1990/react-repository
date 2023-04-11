import { useState } from 'react';
import { ICardItem, ICardList } from '../types/interfaces';
import CardItem from './CardItem';
import ModalWindow from './ModalWindow';

function CardList({ itemList }: ICardList) {
  const [modalActive, setIsOpen] = useState(false);
  const [cardActive, setCardActive] = useState('');
  return (
    <div className="cards">
      {!itemList.length ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        itemList.map((item: ICardItem) => (
          <CardItem card={item} setIsOpen={setIsOpen} setCardActive={setCardActive} key={item.id} />
        ))
      )}
      {modalActive && <ModalWindow cardActive={cardActive} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default CardList;
