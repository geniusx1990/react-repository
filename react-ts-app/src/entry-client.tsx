import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
