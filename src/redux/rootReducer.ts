import { combineReducers } from 'redux';

import categoriesReducer from './getCategories/getCategoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
