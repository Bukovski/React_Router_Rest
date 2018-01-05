import axios from 'axios';
import moment from 'moment';

import { DECREMENT, DECREMENT_REQUESTED, INCREMENT, INCREMENT_REQUESTED,
  FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST, POST_GET_FAILED, POST_NO_FAILED } from "../constants";

/*********** counter ***********/
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });
    
    dispatch({
      type: INCREMENT
    })
  }
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });
    
    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });
    
    dispatch({
      type: DECREMENT
    })
  }
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });
    
    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
};


/*********** posts ***********/
//http://rest.learncode.academy/api/bukovski/friends/
const ROOT_URL = 'http://rest.learncode.academy'; //URL to API server
const API_KEY = 'bukovski';
const URL_REQUEST = `${ROOT_URL}/api/${API_KEY}/friends/`;

export const fetchPosts = () => {
  return function(dispatch) {
    axios.get(URL_REQUEST)
      .then(result => {
        dispatch({
          type: FETCH_POSTS,
          payload: result
        });
      })
      .catch(err => console.log('fetchPosts',err));
  }
};

export function createPost(props) {
  return function(dispatch) {
    axios.post(URL_REQUEST,
      { id: moment().valueOf(), ...props})
      .then(result => {
        dispatch({
          type: CREATE_POST,
          payload: result
        });
      })
      .catch(err => console.log('createPost',err));
  }
}



export function fetchPost(id) {
  return function(dispatch) {
    axios.get(URL_REQUEST + id)
      .then(result => {
        dispatch({
          type: FETCH_POST,
          payload: result
        });
      })
      .catch(err => {
        console.log('fetchPost', err);
        dispatch({
          type: POST_GET_FAILED
        });
  
        setTimeout(() => {
          dispatch({
            type: POST_NO_FAILED
          })
        }, 1000)
        
      });
  }
}

export function deletePost(id) {
  return function(dispatch) {
    axios.delete(URL_REQUEST + id)
      .then(result => {
        dispatch({
          type: DELETE_POST,
          payload: result
        });
      })
      .catch(err => console.log('deletePost',err));
  }
}
