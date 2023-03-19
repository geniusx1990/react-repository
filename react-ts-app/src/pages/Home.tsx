/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header, { getLinkData } from '../layout/header';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header pageName="Home" />
                <h1>This is main part of webpage</h1>
            </>
        );
    }
}
export default Home;
