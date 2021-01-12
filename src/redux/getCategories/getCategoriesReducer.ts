import * as actionTypes from './getCategoriesActionTypes';

const initialState = {
  isFetchingCategories: false,
  categories: [],
  error: null
};

const categoriesReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetchingCategories: true
      }
    
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isFetchingCategories: false
      }
    
    case actionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingCategories: false
      }
    
    default:
      return state;
  }
}

export default categoriesReducer;
