import { createSelector } from 'reselect';

interface State {
  categories: {
    isFetchingCategories: boolean,
    categories: string[],
    error: string
  }
}

const selectCategories = (state: State) => state.categories;

export const selectIsFetchingCategories = createSelector(
  [selectCategories],
  categories => categories.isFetchingCategories
);

export const selectCategoriesList = createSelector(
  [selectCategories],
  categories  => categories.categories
);

export const selectErrorFetchingCategories = createSelector(
  [selectCategories],
  categories  => categories.error
);
