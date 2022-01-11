import React, { useEffect, useState } from 'react';

import {
  BodySection,
  BookItem,
  BooksContainer,
  HeaderSection,
  Heading,
  Main,
} from './BrowseCategory.styles';

// API
import API from '../../API';
// Router
import { useParams } from 'react-router-dom';

// UI Component
import { ProductCover } from '../../components';

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
        <BooksContainer>
          {books?.length === 0 && <h1>No books found...</h1>}

          {books?.map((book, i) => {
            return (
              <BookItem key={i}>
                <ProductCover book={book} />
              </BookItem>
            );
          })}
        </BooksContainer>
      </BodySection>
    </Main>
  );
};

export default BrowseCategory;
