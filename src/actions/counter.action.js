import { DECREMENT, DECREMENT_REQUESTED, INCREMENT, INCREMENT_REQUESTED } from "../constants";


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
