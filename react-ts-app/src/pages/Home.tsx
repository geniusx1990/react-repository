/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import CardList from '../layout/CarldList';
import Header from '../layout/header';
import SearchBar from '../layout/searchBar';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header pageName="Home" />
                <SearchBar />
                <CardList />
            </>
        );
    }
}
export default Home;
