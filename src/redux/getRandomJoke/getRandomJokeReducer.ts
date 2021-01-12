import * as actionTypes from './getRandomJokeActionTypes';

const initialState = {
  isFetchingRandomJoke: false,
  randomJoke: null,
  error: ''
};

const randomJokeReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.FETCH_RANDOM_JOKE_REQUEST:
      return {
        ...state,
        isFetchingRandomJoke: true
      }
    
    case actionTypes.FETCH_RANDOM_JOKE_SUCCESS:
      return {
        ...state,
        randomJoke: action.payload,
        isFetchingRandomJoke: false
      }
    
    case actionTypes.FETCH_RANDOM_JOKE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingRandomJoke: false
      }
    
    default:
      return state;
  }
}

export default randomJokeReducer;
