import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { createAppStore } from './store';
import { createRoutes } from './routes';

const store = createAppStore();
const routes = createRoutes(store.dispatch);

const app = (
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>
);

render(app, document.getElementById('root'));
