import { createSelector } from 'reselect';

interface RandomJoke {
  icon_url: string,
  value: string
}

interface State {
  randomJoke: {
    isFetchingRandomJoke: boolean,
    randomJoke: RandomJoke | null,
    error: string
  }
}

const selectRandomJokeState = (state: State) => state.randomJoke;

export const selectIsFetchingRandomJoke = createSelector(
  [selectRandomJokeState],
  randomJoke => randomJoke.isFetchingRandomJoke
);

export const selectRandomJoke = createSelector(
  [selectRandomJokeState],
  randomJoke  => randomJoke.randomJoke
);

export const selectErrorFetchingRandomJoke = createSelector(
  [selectRandomJokeState],
  randomJoke  => randomJoke.error
);
