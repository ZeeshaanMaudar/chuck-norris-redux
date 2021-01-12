import React from 'react';

// import RandomJoke from '../RandomJoke';

import ArrowRightIcon from '../../assets/arrow-right.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';
import RefreshIcon from '../../assets/refresh.svg';

import {
  Wrapper,
  CategoryContainer,
  Title,
  IconContainer
} from './styled';

interface Props {
  category: string,
  handleClick: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string,
  color: string
}

interface CallRandomJokeArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string
}

interface CallIconsArgs {
  isOpen: boolean,
  category: string,
  categoryChosen: string,
  handleClick: (category: string) => void
}

const callIcons = ({ isOpen, category, categoryChosen, handleClick }: CallIconsArgs) => {

  if (isOpen && category === categoryChosen) {
    return (
      <IconContainer>
        <img
          src={RefreshIcon}
          alt='refresh icon'
          onClick={() => handleClick(category)}
        />
        <img src={ArrowDownIcon} alt='arrow down icon' />
      </IconContainer>
    )
  }

  return <img src={ArrowRightIcon} alt='arrow right icon' />;

}

const callRandomJoke = ({ isOpen, category, categoryChosen }: CallRandomJokeArgs) => {
  if (isOpen && category === categoryChosen) {
    // return <RandomJoke />
    return <div>Random Joke</div>
  }
}

const Category: React.FC<Props> = ({ category, handleClick, isOpen, categoryChosen, color }) => {

  return (
    <Wrapper onClick={() => handleClick(category)} {...{ color }}>
      <CategoryContainer>
        <Title>{category}</Title>
        {callIcons({ isOpen, category, categoryChosen, handleClick })}
      </CategoryContainer>
      {callRandomJoke({ isOpen, category, categoryChosen })}
  </Wrapper>
  );
}

export default Category;
