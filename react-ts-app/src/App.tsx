import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Forms from './pages/Forms';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
