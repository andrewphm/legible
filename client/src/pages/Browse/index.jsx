import React, { useState, useEffect, useRef } from 'react';
import {
  BookItem,
  BooksContainer,
  CategoriesContainer,
  CategoriesList,
  CategoryItem,
  Heading,
  ImageWrapper,
  Main,
  Section,
  TabItem,
  Tabs,
  TabsContainer,
  TabsWrapper,
} from './Browse.styles';

import { Link } from 'react-router-dom';

// UI Component
import { ProductCover } from '../../components/index';

// API
import API from '../../API';

const categories = [
  'Thriller',
  'Fiction',
  'Romance',
  'Science Fiction',
  'Mystery',
  'Action & Adventure',
];

const Categories = () => {
  return (
    <CategoriesContainer>
      <CategoriesList>
        {categories.sort().map((cat, i) => {
          return (
            <CategoryItem key={i}>
              <Link to={`/browse/${cat.toLowerCase().split(' ').join('-')}`}>
                <p>{cat}</p>
              </Link>
            </CategoryItem>
          );
        })}
      </CategoriesList>
    </CategoriesContainer>
  );
};

const Browse = () => {
  const [tab, setTab] = useState('recentlyAdded');

  const [books, setBooks] = useState(null);

  const currentTab = useRef(null);

  const handleTabChange = (e) => {
    currentTab.current.classList.toggle('focused');
    currentTab.current = e.target.parentNode;
    setTab(currentTab.current.id);
    currentTab.current.classList.add('focused');
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (tab === 'recentlyAdded') {
          let res = await API.getBooks();
          setBooks(res);
        }

        if (tab === 'freeBooks') {
          let res = await API.getBooks('free');
          setBooks(res);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, [tab]);

  return (
    <Main>
      {console.log(books)}
      <Heading>Browse</Heading>
      <TabsWrapper>
        <TabsContainer>
          <Tabs>
            <TabItem id="recentlyAdded" ref={currentTab} className="focused">
              <p onClick={handleTabChange}>RECENTLY ADDED</p>
            </TabItem>
            <TabItem id="freeBooks">
              <p onClick={handleTabChange}>FREE BOOKS</p>
            </TabItem>
            <TabItem id="categories">
              <p onClick={handleTabChange}>CATEGORIES</p>
            </TabItem>
          </Tabs>
        </TabsContainer>
      </TabsWrapper>

      <Section>
        {tab === 'categories' ? (
          <Categories />
        ) : (
          <BooksContainer>
            {books?.map((book, i) => {
              return (
                <BookItem key={i}>
                  <ProductCover book={book} />
                </BookItem>
              );
            })}
          </BooksContainer>
        )}
      </Section>
    </Main>
  );
};

export default Browse;