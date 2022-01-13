import React, { useState, useEffect } from 'react';

// API
import API from '../../API';

// Router
import { useLocation } from 'react-router-dom';
import { BookSection, InfoContainer, Main } from './Search.styles';

const Search = () => {
  const [books, setBooks] = useState(null);

  let search = useLocation().search;
  let params = new URLSearchParams(search);
  let query = params.get('q');

  useEffect(() => {
    //Fetch books with query term
    // setBooks with result
  }, []);

  return (
    <Main>
      <InfoContainer></InfoContainer>
      <BookSection></BookSection>
    </Main>
  );
};

export default Search;
