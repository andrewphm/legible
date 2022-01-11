import React from 'react';
import {
  BodySection,
  BooksContainer,
  HeaderSection,
  Heading,
  Main,
} from './BrowseCategory.styles';

const BrowseCategory = () => {
  return (
    <Main>
      <HeaderSection>
        <Heading></Heading>
      </HeaderSection>
      <BodySection>
        <BooksContainer></BooksContainer>
      </BodySection>
    </Main>
  );
};

export default BrowseCategory;
