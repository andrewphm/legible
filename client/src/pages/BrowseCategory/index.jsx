import React, { useEffect, useState, useRef } from 'react';

import {
  BodySection,
  BookItem,
  BooksContainer,
  FilterContainer,
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
import { ArrowDropDown } from '@material-ui/icons';

const BrowseCategory = () => {
  const { id } = useParams();
  const catArr = id.split(' & ');
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState('Book Title (A to Z)');
  const hiddenMenu = useRef(null);
  const arrow = useRef(null);

  const handleFilterClick = (e) => {
    hiddenMenu.current.style.display = 'flex';
  };

  const closeMenu = () => {
    // if (hiddenMenu.current.style.display === 'flex') {
    //   hiddenMenu.current.style.display = 'none';
    // }
  };

  // Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (id === 'free books') {
          let res = await API.getBooks('free');
          return setBooks(res);
        }

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
    <Main onClick={closeMenu}>
      {console.log(catArr)}
      <HeaderSection>
        <Heading>{id}</Heading>
        <FilterContainer onClick={handleFilterClick}>
          <div className="active">
            <p>
              <span>Sort By: </span>
              {filter}
            </p>
          </div>
          <ArrowDropDown ref={arrow} />

          <div ref={hiddenMenu} className="hidden-menu">
            <div className="menu-item">
              <input type="button" value="Book Title (A to Z)" />
            </div>

            <div className="menu-item">
              <input type="button" value="Book Title (Z to A)" />
            </div>

            <div className="menu-item">
              <input type="button" value="Date Added (Newest First)" />
            </div>

            <div className="menu-item">
              <input type="button" value="Date Added (Oldest First)" />
            </div>
          </div>
        </FilterContainer>
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
