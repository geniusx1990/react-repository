import React from 'react';
import Header from '../layout/header';

/* eslint-disable react/prefer-stateless-function */
class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <Header pageName="About Us" />
                <h1>This is main part of webpage</h1>
            </div>
        );
    }
}
export default AboutUs;
