import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from '../../redux/getCategories/getCategoriesActions';
import { selectIsFetchingCategories, selectCategoriesList, selectErrorFetchingCategories } from '../../redux/getCategories/getCategoriesSelectors';

import { fetchRandomJokeStartAsync } from '../../redux/getRandomJoke/getRandomJokeActions';


import Category from '../Category';

import colorsArray from '../../utils/colorsArray';

import {
  Wrapper,
  Title,
  Spinner
} from './styled';

interface CategoriesArgs {
  categoriesArray: string[],
  openAccordion: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string,
  refreshRandomJoke: (event: any, category: string) => void,
}

const callCategories = ({ categoriesArray, openAccordion, isOpen, categoryChosen, refreshRandomJoke }: CategoriesArgs) => {

  if(categoriesArray.length > 0) {

    return categoriesArray.map((category, index) => {

      let color = colorsArray[index];

      return <Category key={category} {...{ category, openAccordion, isOpen, categoryChosen, color, refreshRandomJoke  }} />;

    })
  }

  return null;
}

const CategoriesList: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [categoryChosen, setCategoryChosen] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(selectIsFetchingCategories);
  const categoriesArray = useSelector(selectCategoriesList);
  const error = useSelector(selectErrorFetchingCategories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    dispatch(fetchCategoriesStartAsync());
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <Spinner />
  }

  const openAccordion = (category: string) => {

    if (categoryChosen && categoryChosen !== category) {
      setIsOpen(false);
      setCategoryChosen(category);
    }
    
    setIsOpen(prevOpen => !prevOpen);
    setCategoryChosen(category);

    dispatch(fetchRandomJokeStartAsync(category));

  }

  const refreshRandomJoke = (event: any, category: string) => {

    event.stopPropagation();

    dispatch(fetchRandomJokeStartAsync(category));

  }

  return (
    <Wrapper>
      <Title>Categories</Title>
      <div>
        {callCategories({ categoriesArray, openAccordion, isOpen, categoryChosen, refreshRandomJoke })}
      </div>
    </Wrapper>
  );
}

export default CategoriesList;
