import { Routes, Route } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Forms from '../pages/Forms';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import '../index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
