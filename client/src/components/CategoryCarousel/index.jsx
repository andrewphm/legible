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

const CategoryCarousel = ({ category, title, desc }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const gettingBooks = async () => {
      try {
        let res = await API.getBooks(category);
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
              <HeadingTitle>{title}</HeadingTitle>
              <HeadingDesc>{desc}</HeadingDesc>
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
