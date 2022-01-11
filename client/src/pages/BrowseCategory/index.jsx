import React, { useEffect, useState } from 'react';

import {
  BodySection,
  BooksContainer,
  HeaderSection,
  Heading,
  Main,
} from './BrowseCategory.styles';

// API
import API from '../../API';
// Router
import { useParams } from 'react-router-dom';

const BrowseCategory = () => {
  const { id } = useParams();
  const catArr = id.split(' & ');

  const [books, setBooks] = useState(null);

  // Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let res = await API.getBooks(catArr);
        console.log(res);
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Main>
      {console.log(catArr)}
      <HeaderSection>
        <Heading>{id}</Heading>
      </HeaderSection>
      <BodySection>
        <BooksContainer></BooksContainer>
      </BodySection>
    </Main>
  );
};

export default BrowseCategory;
