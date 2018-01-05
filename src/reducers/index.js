import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';
import posts from './post';

export default combineReducers({
  router: routerReducer, //add routerReducer on `routing` key for synchronization
  form: formReducer,
  counter,
  posts
});
