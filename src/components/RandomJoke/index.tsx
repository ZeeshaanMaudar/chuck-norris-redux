import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsFetchingRandomJoke, selectRandomJoke, selectErrorFetchingRandomJoke } from '../../redux/getRandomJoke/getRandomJokeSelectors';

import {
  Wrapper,
  Spinner,
  Image,
  Content
} from './styled';

interface RandomJokeArgs {
  icon_url: string,
  value: string
}

 const callContent = (randomJoke: RandomJokeArgs | null) => {

  if (randomJoke) {
    
    const { icon_url, value } = randomJoke;

    return (
      <Wrapper>
        <Image src={icon_url} alt='chuck norris avatar' />
        <Content>{value}</Content>
      </Wrapper>
    );

  }

  return null;

}

const RandomJoke: React.FC = () => {

  const loading = useSelector(selectIsFetchingRandomJoke);
  const randomJoke = useSelector(selectRandomJoke);
  const error = useSelector(selectErrorFetchingRandomJoke);

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <Spinner />
  }

  return (
    callContent(randomJoke)
  );
}

export default RandomJoke;
