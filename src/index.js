import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import 'sanitize.css/sanitize.css'; //reset styles

import store, { history } from './store';
import Routes from './routes';

render(
  <Provider store={ store }>
    <Routes history={ history }/>
  </Provider>,
  document.getElementById('root')
);
