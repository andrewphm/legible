import React, { useState, useEffect, useRef } from 'react';

// Router
import { Link } from 'react-router-dom';

// Component
import { SkeletonLoading } from '../index';

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
  const [books, setBooks] = useState(null);
  const listContainer = useRef(null);

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

  const handleNextClick = (e) => {
    e.stopPropagation();
    const scrollLeft = listContainer.current.parentNode.scrollLeft;
    listContainer.current.parentNode.scrollLeft = scrollLeft + 500;
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    const scrollLeft = listContainer.current.parentNode.scrollLeft;
    listContainer.current.parentNode.scrollLeft = scrollLeft - 500;
  };

  return (
    <>
      {books ? (
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
              <BooksContainer ref={listContainer} id="book-container">
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
          <LeftSlider onClick={handlePrevClick}>
            <ArrowBackIos className="arrow-left"></ArrowBackIos>
          </LeftSlider>
          <RightSlider onClick={handleNextClick}>
            <ArrowForwardIos className="arrow"></ArrowForwardIos>
          </RightSlider>
        </Section>
      ) : (
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
              <BooksContainer ref={listContainer} id="book-container">
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
                <SkeletonLoading></SkeletonLoading>
              </BooksContainer>
            </BooksWrapper>
          </Wrapper>
          <LeftSlider onClick={handlePrevClick}>
            <ArrowBackIos className="arrow-left"></ArrowBackIos>
          </LeftSlider>
          <RightSlider onClick={handleNextClick}>
            <ArrowForwardIos className="arrow"></ArrowForwardIos>
          </RightSlider>
        </Section>
      )}
    </>
  );
};

export default CategoryCarousel;
