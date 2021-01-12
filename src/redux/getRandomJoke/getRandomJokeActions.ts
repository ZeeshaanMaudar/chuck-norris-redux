import axios from 'axios';

import * as actionTypes from './getRandomJokeActionTypes';

interface RandomJoke {
  icon_url: string,
  value: string
}

export const fetchRandomJokeRequest = () => ({
  type: actionTypes.FETCH_RANDOM_JOKE_REQUEST,
});

export const fetchRandomJokeSuccess = (randomJoke: RandomJoke) => ({
  type: actionTypes.FETCH_RANDOM_JOKE_SUCCESS,
  payload: randomJoke
});

export const fetchRandomJokeFailure = (error: string) => ({
  type: actionTypes.FETCH_RANDOM_JOKE_FAILURE,
  payload: error
});

export const fetchRandomJokeStartAsync = (category: string) => {
  return async (dispatch: any) => {
    
    dispatch(fetchRandomJokeRequest());

    try {

      const randomJokeResponse = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      dispatch(fetchRandomJokeSuccess(randomJokeResponse.data))

    } catch (error) {
      dispatch(fetchRandomJokeFailure(error))
    }
  }
}
