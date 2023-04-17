import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../types/interfaces';

import { IModal } from '../types/interfaces';
import { ICardItem } from '../types/interfaces';

const ModalWindow = ({ cardActive, setIsOpen }: IModal) => {
  const [isLoading, setIsLoading] = useState(true);
  const [card, setCard] = useState<ICardItem>();

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const resource = `${API.URL}${API.ByID}${cardActive}?${API.ACCESS_KEY}`;
    fetch(resource)
      .then((response) => response.json())
      .then((data) => setCard(data))
      .then(() => setIsLoading(false));
  }, [cardActive]);

  return (
    <div className="modal">
      <div className="content">
        <span className="close" onClick={handleClick} />
        <>
          <img className="modal_image" src={card?.urls.regular} />
          <div className="modal_information">
            <h4 className="modal_author">{card?.user.name ?? 'no data'}</h4>
            <h3 className="modal_title">{card?.description ?? 'no data'}</h3>
            <p className="modal_paragraph">{card?.alt_description ?? 'No description'}</p>
            <div className="modal_block">
              {card?.tags.slice(0, 3).map((item) => (
                <span className="card_tag" key={item.title}>
                  {item.title}
                </span>
              ))}
            </div>
            <div className="modal_block">
              <span className="modal_date">Date: {card?.created_at.split('T')[0]}</span>
              <span className="modal_likes">
                <svg
                  width="32px"
                  height="32px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 841.9 595.3"
                >
                  <g fill="#FF0000">
                    <path
                      d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"
                    />
                  </g>
                </svg>
                {card?.likes}
              </span>
            </div>
            <Link to={card?.links.download as string} className="download_button" target="blanc">
              Download
            </Link>
          </div>
        </>
      </div>
      <div className="modal_shadow" onClick={handleClick}></div>
    </div>
  );
};

export default ModalWindow;
