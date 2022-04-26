import 'normalize.css';
import '@shared/styles/dist/site';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Routes from './routes';

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>,
    rootElement,
  );
}
