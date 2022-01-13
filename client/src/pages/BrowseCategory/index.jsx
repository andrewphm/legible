import React, { useEffect, useState, useRef } from 'react';

import {
  BodySection,
  BookItem,
  BooksContainer,
  FilterContainer,
  HeaderSection,
  Heading,
  InfoContainer,
  Main,
  ResultsInfo,
} from './BrowseCategory.styles';

// API
import API from '../../API';
// Router
import { useParams } from 'react-router-dom';

// UI Component
import { ProductCover } from '../../components';
import { ArrowDropDown } from '@material-ui/icons';
import { BreadCrumb } from '../../components';

const BrowseCategory = () => {
  const { id } = useParams();
  const catArr = id.split(' & ');
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState('Date Added (Newest First)');
  const hiddenMenu = useRef(null);
  const arrow = useRef(null);

  const toggleHiddenMenu = (e) => {
    hiddenMenu.current.classList.toggle('show-menu');
    arrow.current.classList.toggle('move-arrow');
  };

  const handleFilterChange = (e) => {
    hiddenMenu.current.classList.toggle('show-menu');
    arrow.current.classList.toggle('move-arrow');
    setFilter(e.target.firstChild.value);
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
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  // Filter books
  useEffect(() => {
    if (filter === 'Book Title (A to Z)') {
      books &&
        setBooks((prev) => {
          return [
            ...prev.sort((a, b) => {
              let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();

              if (fa < fb) {
                return -1;
              }
              if (fa > fb) {
                return 1;
              }
              return 0;
            }),
          ];
        });
    }

    if (filter === 'Book Title (Z to A)') {
      books &&
        setBooks((prev) => {
          return [
            ...prev.sort((a, b) => {
              let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();

              if (fa < fb) {
                return 1;
              }
              if (fa > fb) {
                return -1;
              }
              return 0;
            }),
          ];
        });
    }

    if (filter === 'Date Added (Newest First)') {
      books &&
        setBooks((prev) => {
          return [
            ...prev.sort((a, b) => {
              return (
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime()
              );
            }),
          ];
        });
    }

    if (filter === 'Date Added (Oldest First)') {
      books &&
        setBooks((prev) => {
          return [
            ...prev.sort((a, b) => {
              return (
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
              );
            }),
          ];
        });
    }
  }, [filter]);

  return (
    <Main>
      <HeaderSection>
        <BreadCrumb />
        <Heading>{id.split(',').join(' & ')}</Heading>
        <InfoContainer>
          <FilterContainer>
            <button className="active" onClick={toggleHiddenMenu}>
              <p>
                <span>Sort By: </span>
                {filter}
              </p>
              <ArrowDropDown ref={arrow} />
            </button>

            <div ref={hiddenMenu} className="hidden-menu">
              <div className="menu-item" onClick={handleFilterChange}>
                <input type="button" value="Book Title (A to Z)" />
              </div>

              <div onClick={handleFilterChange} className="menu-item">
                <input type="button" value="Book Title (Z to A)" />
              </div>

              <div onClick={handleFilterChange} className="menu-item">
                <input type="button" value="Date Added (Newest First)" />
              </div>

              <div onClick={handleFilterChange} className="menu-item">
                <input type="button" value="Date Added (Oldest First)" />
              </div>
            </div>
          </FilterContainer>

          <ResultsInfo>
            <p>
              Showing results 1-{books?.length} of {books?.length}
            </p>
          </ResultsInfo>
        </InfoContainer>
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
