/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Header, { getLinkData } from './layout/header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        );
    }
}

export default App;
