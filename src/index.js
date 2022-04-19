import React from 'react';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />,
  </Provider>,
);
