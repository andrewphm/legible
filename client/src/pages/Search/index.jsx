import React, { useState, useEffect, useRef } from 'react';

// API
import API from '../../API';

// Router
import { useLocation } from 'react-router-dom';
import { BookSection, Container, Main } from './Search.styles';

// Material UI
import { ArrowDropDown } from '@material-ui/icons';

// UI components
import {
  FilterContainer,
  InfoContainer,
  ResultsInfo,
} from '../BrowseCategory/BrowseCategory.styles';

const Search = () => {
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState('Date Added (Newest First)');
  const hiddenMenu = useRef(null);
  const arrow = useRef(null);

  let search = useLocation().search;
  let params = new URLSearchParams(search);
  let query = params.get('q');

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
    try {
      API.searchBooks(query)
        .then((res) => {
          console.log(res);
          setBooks(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    //Fetch books with query term
    // setBooks with result
  }, []);

  return (
    <Main>
      <Container>
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
              Showing results {books?.length > 0 ? '1' : '0'}-
              {books?.length > 0 ? books.length : '0'} of{' '}
              {books?.length > 0 ? books.length : '0'}
            </p>
          </ResultsInfo>
        </InfoContainer>
      </Container>
      <BookSection></BookSection>
    </Main>
  );
};

export default Search;
