import React from 'react';

import RandomJoke from '../RandomJoke';

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
  openAccordion: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string,
  color: string,
  refreshRandomJoke: (event: any, category: string) => void,
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
  refreshRandomJoke: (event: any, category: string) => void
}

const callIcons = ({ isOpen, category, categoryChosen, refreshRandomJoke }: CallIconsArgs) => {

  if (isOpen && category === categoryChosen) {
    return (
      <IconContainer>
        <img
          src={RefreshIcon}
          alt='refresh icon'
          onClick={event => refreshRandomJoke(event, category)}
        />
        <img src={ArrowDownIcon} alt='arrow down icon' />
      </IconContainer>
    )
  }

  return <img src={ArrowRightIcon} alt='arrow right icon' />;

}

const callRandomJoke = ({ isOpen, category, categoryChosen }: CallRandomJokeArgs) => {

  if (isOpen && category === categoryChosen) {

    return <RandomJoke />

  }

}

const Category: React.FC<Props> = ({ category, openAccordion, isOpen, categoryChosen, color, refreshRandomJoke }) => {

  return (
    <Wrapper onClick={() => openAccordion(category)} {...{ color }}>
      <CategoryContainer>
        <Title>{category}</Title>
        {callIcons({ isOpen, category, categoryChosen, refreshRandomJoke })}
      </CategoryContainer>
      {callRandomJoke({ isOpen, category, categoryChosen })}
  </Wrapper>
  );
}

export default Category;
