import { useEffect, useState } from 'react';
import CardList from '../layout/CarldList';
import Header from '../layout/header';
import SearchBar from '../layout/searchBar';
import { API } from '../types/interfaces';
import Counter from '../store/Counter';

function Home() {
  const [itemList, setItemList] = useState([]);
  const searchStorage = localStorage.getItem('searchInput');
  const [query, setQuery] = useState(searchStorage ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      let URL: string;
      if (query === '') {
        URL = `${API.URL}${API.RANDOM}${API.ACCESS_KEY}`;
      } else {
        URL = `${API.URL}${API.Search}${query}${API.ACCESS_KEY}`;
      }
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          if (query === '') {
            setItemList(data);
          } else {
            setItemList(data.results);
          }
        })
        .then(() => setIsLoading(false));
    } catch {
      setIsError(true);
    }
  }, [query]);
  return (
    <>
      <Header pageName="Home" />
      <SearchBar />
      <CardList itemList={itemList} />
    </>
  );
}
export default Home;
