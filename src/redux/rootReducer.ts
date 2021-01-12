import { combineReducers } from 'redux';

import categoriesReducer from './getCategories/getCategoriesReducer';
import randomJokeReducer from './getRandomJoke/getRandomJokeReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  randomJoke: randomJokeReducer
});

export default rootReducer;
