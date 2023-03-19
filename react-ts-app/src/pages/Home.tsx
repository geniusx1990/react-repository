/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header, { getLinkData } from '../layout/header';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header pageName="Home" />
                <h1>This is main part of webpage</h1>
            </div>
        );
    }
}
export default Home;
