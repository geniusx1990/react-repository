import { useState } from 'react';
import { ICardItem } from '../types/interfaces';
import CardItem from './CardItem';
import ModalWindow from './ModalWindow';
import { useAppSelector } from '../store/hooks';
import { useGetPokemonByNameQuery } from '../store/apiSlice';

function CardList() {
  const query = useAppSelector((state) => state.searchReducer.searchRequest);
  const { data = [] } = useGetPokemonByNameQuery(query);
  const [modalActive, setIsOpen] = useState(false);
  const [cardActive, setCardActive] = useState('');
  return (
    <div className="cards">
      {!data.length ? (
        <p>Nothing found for your request. Please try again...</p>
      ) : (
        data.map((item: ICardItem) => (
          <CardItem card={item} setIsOpen={setIsOpen} setCardActive={setCardActive} key={item.id} />
        ))
      )}
      {modalActive && <ModalWindow cardActive={cardActive} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default CardList;
