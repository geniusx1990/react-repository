import { useEffect, useState } from 'react';
import CardList from '../layout/CarldList';
import Header from '../layout/header';
import SearchBar from '../layout/searchBar';
import { API } from '../types/interfaces';

function Home() {
  const [itemList, setItemList] = useState([]);
  const searchValueStorage = localStorage.getItem('searchInputValue');
  const [query, setQuery] = useState(searchValueStorage ?? '');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      const query = `${API.URL}${API.RANDOM}${API.ACCESS_KEY}`;
      fetch(query)
        .then((response) => response.json())
        .then((data) => {
          setItemList(data);
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
