import React from 'react';

// Images
import antiRacism from '../../assets/categories/antiracism.svg';
import biographies from '../../assets/categories/biographies.svg';
import freeBooks from '../../assets/categories/freebooks.svg';
import mystery from '../../assets/categories/mystery.svg';
import romance from '../../assets/categories/romance.svg';
import scifi from '../../assets/categories/scifi.svg';
import thrillers from '../../assets/categories/thrillers.svg';
import youngAdult from '../../assets/categories/youngadult.svg';

//Styled components
import {
  Section,
  CategoryContainer,
  CategoryList,
  CategoryItem,
  ItemContainer,
  LeftSlider,
  RightSlider,
} from './Categories.styles';

import { Link } from 'react-router-dom';

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const Categories = () => {
  const handleNextClick = (e) => {
    e.stopPropagation();
    const container = document.getElementById('categories-container');
    const scrollLeft = container.scrollLeft;
    container.scrollLeft = scrollLeft + 500;
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    const container = document.getElementById('categories-container');

    const scrollLeft = container.scrollLeft;
    container.scrollLeft = scrollLeft - 500;
  };

  const categories = [
    {
      category: 'FREE BOOKS',
      img: freeBooks,
    },
    {
      category: 'YOUNG ADULT',
      img: youngAdult,
    },
    {
      category: 'ROMANCE',
      img: romance,
    },
    {
      category: 'SCI-FI & FANTASY',
      img: scifi,
    },
    {
      category: 'MYSTERY & CRIME',
      img: mystery,
    },
    {
      category: 'THRILLER & HORROR',
      img: thrillers,
    },
    {
      category: 'BIOGRAPHIES & MEMOIRS',
      img: biographies,
    },
    {
      category: 'ANTI RACISM',
      img: antiRacism,
    },
  ];

  return (
    <Section>
      <h2>Browse Book Categories</h2>
      <CategoryContainer>
        <CategoryList id="categories-container">
          {categories.map((item, i) => (
            <CategoryItem key={i}>
              <ItemContainer>
                <Link to={`/browse/${item.category.toLowerCase()}`}>
                  <div className="img-wrapper">
                    <img
                      src={item.img}
                      alt="A miniature treehouse with books"
                    />
                  </div>
                  <h3>{item.category}</h3>
                </Link>
              </ItemContainer>
            </CategoryItem>
          ))}
        </CategoryList>
        <LeftSlider onClick={handlePrevClick}>
          <ArrowBackIos className="arrow-left"></ArrowBackIos>
        </LeftSlider>
        <RightSlider onClick={handleNextClick}>
          <ArrowForwardIos className="arrow"></ArrowForwardIos>
        </RightSlider>
      </CategoryContainer>
    </Section>
  );
};

export default Categories;
