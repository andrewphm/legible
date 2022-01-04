import React, { useState, useEffect } from 'react';

// Router
import { Link } from 'react-router-dom';

// Styled components
import {
  Section,
  Wrapper,
  HeadingContainer,
  BooksWrapper,
  HeadingDesc,
  HeadingTitle,
  BooksContainer,
} from './CategoryCarousel.styles';

// API
import API from '../../API';

import { ProductCover } from '../index';

const CategoryCarousel = ({ category }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const gettingBooks = async () => {
      try {
        let res = await API.getBooks('Romance');
        console.log(res);
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };

    gettingBooks();
  }, []);

  return (
    <>
      {books && (
        <Section>
          <Wrapper>
            <HeadingContainer>
              <HeadingTitle>2021 Award Winners & Nominees</HeadingTitle>
              <HeadingDesc>
                The books that have won the hearts of readers and award juries
                this year.
              </HeadingDesc>
              <Link to="/" className="link">
                SEE ALL
              </Link>
            </HeadingContainer>
            <BooksWrapper>
              <BooksContainer>
                {books.map((book, i) => {
                  return (
                    <li key={i}>
                      <ProductCover book={book}></ProductCover>
                    </li>
                  );
                })}
              </BooksContainer>
            </BooksWrapper>
          </Wrapper>
        </Section>
      )}
    </>
  );
};

export default CategoryCarousel;
