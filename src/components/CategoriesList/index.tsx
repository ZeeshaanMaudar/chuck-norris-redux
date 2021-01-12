import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from '../../redux/getCategories/getCategoriesActions';
import { selectIsFetchingCategories, selectCategoriesList, selectErrorFetchingCategories } from '../../redux/getCategories/getCategoriesSelectors';


// import Category from '../Category';

import colorsArray from '../../utils/colorsArray';

import {
  Wrapper,
  Title,
  Spinner
} from './styled';

interface CategoriesArgs {
  categoriesArray: string[],
  handleClick: (category: string) => void,
  isOpen: boolean,
  categoryChosen: string
}

const callCategories = ({ categoriesArray, handleClick, isOpen, categoryChosen }: CategoriesArgs) => {

  if(categoriesArray.length > 0) {

    return categoriesArray.map((category, index) => {

      let color = colorsArray[index];

      // return <Category key={category} {...{ category, handleClick, isOpen, categoryChosen, color  }} />;
      return <div key={category}>{category}</div>
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

  const handleClick = (category: string) => {

    if (categoryChosen && categoryChosen !== category) {
      setIsOpen(false);
      setCategoryChosen(category);
    }
    
    setIsOpen(prevOpen => !prevOpen);
    setCategoryChosen(category);
  }

  return (
    <Wrapper>
      <Title>Categories</Title>
      <div>
        {callCategories({ categoriesArray, handleClick, isOpen, categoryChosen })}
      </div>
    </Wrapper>
  );
}

export default CategoriesList;
