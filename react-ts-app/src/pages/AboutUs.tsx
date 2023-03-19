import React from 'react';
import Header from '../layout/header';

/* eslint-disable react/prefer-stateless-function */
class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Header pageName="About Us" />
                <h1>This is page ABOUT US</h1>
            </>
        );
    }
}
export default AboutUs;
