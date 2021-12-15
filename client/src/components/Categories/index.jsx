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
} from './Categories.styles';

const Categories = () => {
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
      category: 'THRILLERS & HORROR',
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
        <CategoryList>
          {categories.map((item, i) => (
            <CategoryItem key={i}>
              <ItemContainer>
                <img src={item.img} alt="A miniature treehouse with books" />
                <h3>{item.category}</h3>
              </ItemContainer>
            </CategoryItem>
          ))}
        </CategoryList>
      </CategoryContainer>
    </Section>
  );
};

export default Categories;
