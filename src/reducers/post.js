import { FETCH_POSTS, FETCH_POST, POST_GET_FAILED, POST_NO_FAILED } from '../constants';

const initialState = {
  all: [],
  post: null,
  postError: false
};

export default function( state = initialState, action ) {
  switch( action.type ) {
    case FETCH_POST:
      return { ...state, post: action.payload.data, postError: false };
    
    case FETCH_POSTS:
      return { ...state,  all: action.payload.data };
    
    case POST_GET_FAILED:
      return { ...state,  postError: true };
      
    case POST_NO_FAILED:
      return { ...state,  postError: false };
    
    default:
      return state;
  }
}
