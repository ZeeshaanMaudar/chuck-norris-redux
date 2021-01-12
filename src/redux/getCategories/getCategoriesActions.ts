import axios from 'axios';

import * as actionTypes from './getCategoriesActionTypes';

export const fetchCategoriesRequest = () => ({
  type: actionTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories: string[]) => ({
  type: actionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = (error: string) => ({
  type: actionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error
});

export const fetchCategoriesStartAsync = () => {
  return async (dispatch: any) => {
    
    dispatch(fetchCategoriesRequest());

    try {

      const categoriesResponse = await axios.get('https://api.chucknorris.io/jokes/categories');
      dispatch(fetchCategoriesSuccess(categoriesResponse.data))

    } catch (error) {
      dispatch(fetchCategoriesFailure(error))
    }
  }
}
