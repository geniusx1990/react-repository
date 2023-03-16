import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
