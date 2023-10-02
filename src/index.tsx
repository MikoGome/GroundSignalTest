import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)