import React from 'react';

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

import { ProductCover } from '../index';

const CategoryCarousel = () => {
  return (
    <Section>
      <Wrapper>
        <HeadingContainer>
          <HeadingTitle>2021 Award Winners & Nominees</HeadingTitle>
          <HeadingDesc>
            The books that have won the hearts of readers and award juries this
            year.
          </HeadingDesc>
          <Link to="/" className="link">
            SEE ALL
          </Link>
        </HeadingContainer>
        <BooksWrapper>
          <BooksContainer>
            <li>
              <ProductCover></ProductCover>
            </li>
          </BooksContainer>
        </BooksWrapper>
      </Wrapper>
    </Section>
  );
};

export default CategoryCarousel;
