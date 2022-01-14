import React, { useState, useEffect, useRef } from 'react';

// API
import API from '../../API';

// Router
import { useLocation, Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

import {
  BooksContainer,
  BookSection,
  BookTitle,
  Container,
  Cover,
  CTA,
  Description,
  DescriptionContainer,
  Image,
  Info,
  ListItem,
  Main,
} from './Search.styles';

// Material UI
import {
  ArrowDropDown,
  FavoriteBorderOutlined,
  ShoppingCart,
} from '@material-ui/icons';

// UI components
import {
  FilterContainer,
  InfoContainer,
  ResultsInfo,
} from '../BrowseCategory/BrowseCategory.styles';

const BookItem = ({ book, user }) => {
  const [description, setDescription] = useState([]);
  const arrow = useRef(null);
  const bookDescription = useRef(null);
  const [innerButtonText, setInnerButtonText] = useState('Show more');

  const handleShowMore = () => {
    arrow.current.classList.toggle('rotate');
    bookDescription.current.classList.toggle('expand-description');

    setInnerButtonText((prev) =>
      prev === 'Show more' ? 'Show less' : 'Show more'
    );
  };

  useEffect(() => {
    let splitDescription = book.description.split(/\r?\n/);
    setDescription(splitDescription);
  }, []);

  return (
    <ListItem>
      <Cover>
        <Link to={`/legible/book/${book._id}`}>
          <Image src={book.image}></Image>
        </Link>
      </Cover>
      <Info>
        <div className="title-container">
          {' '}
          <Link to={`/legible/book/${book._id}`}>
            <BookTitle>{book.title}</BookTitle>
          </Link>
        </div>
        <p className="author">
          by <strong>{book.author.toLowerCase()}</strong>
        </p>
        <p className="price">
          {book.price > 0 ? `CAD $${book.price}` : 'FREE'}
        </p>
        <CTA>
          <Link to={`/legible/purchase/${book._id}`}>
            <ShoppingCart></ShoppingCart>
          </Link>
          <Link to="/">
            <FavoriteBorderOutlined></FavoriteBorderOutlined>
          </Link>
        </CTA>
      </Info>
      <DescriptionContainer>
        <Description ref={bookDescription}>
          {description?.map((para, i) => {
            if (para === '') {
              return <br key={i}></br>;
            }

            return <p key={i}>{para}</p>;
          })}
        </Description>
        <button onClick={handleShowMore}>
          {innerButtonText} <ArrowDropDown ref={arrow}></ArrowDropDown>
        </button>
      </DescriptionContainer>
    </ListItem>
  );
};

const Search = () => {
  const [books, setBooks] = useState(null);
  const [filter, setFilter] = useState('Date Added (Newest First)');
  const hiddenMenu = useRef(null);
  const arrow = useRef(null);
  const user = useSelector((state) => state.user.currentUser);

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
  }, [search]);

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
              {books?.length > 0 ? books.length : '0'} for{' '}
              <strong>"{query}"</strong>
            </p>
          </ResultsInfo>
        </InfoContainer>
      </Container>
      <BookSection>
        <BooksContainer>
          {books?.map((book, i) => {
            return <BookItem book={book} user={user} key={i} />;
          })}
        </BooksContainer>
      </BookSection>
    </Main>
  );
};

export default Search;
