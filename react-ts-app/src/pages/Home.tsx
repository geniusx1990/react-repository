import { useEffect, useState } from 'react';
import CardList from '../layout/CarldList';
import Header from '../layout/header';
import SearchBar from '../layout/searchBar';

function Home() {
  return (
    <>
      <Header pageName="Home" />
      <SearchBar />
      <CardList />
    </>
  );
}
export default Home;
