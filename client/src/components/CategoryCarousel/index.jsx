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
  LeftSlider,
  RightSlider,
} from './CategoryCarousel.styles';

// API
import API from '../../API';

import { ProductCover } from '../index';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const CategoryCarousel = ({ category, title, desc }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const gettingBooks = async () => {
      try {
        let res = await API.getBooks(category);
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };

    gettingBooks();
  }, []);

  let container;

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e.target.parentNode.parentNode);

    // const bookContainer = document.querySelector('.book-container');

    // console.log('container', bookContainer);
    // const scrollWidth = bookContainer.scrollWidth;
    // const scrollLeft = bookContainer.scrollLeft;
    // bookContainer.scrollLeft = scrollLeft + 200;
  };

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
              <BooksContainer id="book-container">
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
          <LeftSlider>
            <ArrowBackIos className="arrow-left"></ArrowBackIos>
          </LeftSlider>
          <RightSlider onClick={handleClick}>
            <ArrowForwardIos className="arrow"></ArrowForwardIos>
          </RightSlider>
        </Section>
      )}
    </>
  );
};

export default CategoryCarousel;
