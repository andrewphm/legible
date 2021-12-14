import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';
import SearchIcon from '../../assets/SearchIcon';

// Styled components
import {
  Wrapper,
  Container,
  Right,
  MenuList,
  MenuItem,
  SearchContainer,
  Input,
  Search,
} from './Header.styles';

const Header = () => {
  const handleMenuBlur = () => {
    const nav = document.querySelector('nav');
    nav.style.top = '-500%';
    let search = document.getElementById('search-container');
    search.style.top = '-200%';
  };

  const handleMenuClick = () => {
    const nav = document.querySelector('nav');

    nav.style.top = '101%';
  };

  const handleSearchClick = () => {
    let search = document.getElementById('search-container');
    let input = document.getElementById('search-input');

    input.focus();
    search.style.top = '101%';
  };

  return (
    <Wrapper type="reader">
      <MenuList>
        <MenuItem auth="auth">
          <div className="login">Log in</div>
          <div className="signup">Sign up</div>
        </MenuItem>
        <MenuItem>
          <p>Browse</p>
        </MenuItem>
      </MenuList>
      <SearchContainer id="search-container">
        <Search>
          <Input
            id="search-input"
            placeholder="Search for books, authors, topics, and more!"
            type="text"
            onBlur={handleMenuBlur}
          />
          <SearchOutlined />
        </Search>
      </SearchContainer>
      <Container>
        <Link
          aria-label="Back to homepage"
          to="/"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Logo />
        </Link>
        <Right>
          <button className="search__button" onClick={handleSearchClick}>
            <SearchIcon />
          </button>
          <button
            className="menu__button"
            onFocus={handleMenuClick}
            onBlur={handleMenuBlur}
          >
            <MenuIcon />
          </button>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Header;
