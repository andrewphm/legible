import { NativeSelect } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';
import SearchIcon from '../../assets/SearchIcon';

// Styled components
import { Wrapper, Container, Right, MenuList, MenuItem } from './Header.styles';

const Header = () => {
  const handleMenuFocus = () => {
    const nav = document.querySelector('nav');

    nav.style.display = 'flex';
  };
  const handleMenuBlur = () => {
    const nav = document.querySelector('nav');

    nav.style.display = 'none';
  };

  return (
    <Wrapper type="reader">
      <Container>
        <Link
          aria-label="Back to homepage"
          to="/"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Logo />
        </Link>
        <Right>
          <button className="search__button">
            <SearchIcon />
          </button>
          <button
            className="menu__button"
            onFocus={handleMenuFocus}
            onBlur={handleMenuBlur}
          >
            <MenuIcon />
          </button>
        </Right>
        <MenuList>
          <MenuItem auth="auth">
            <div className="login">Log in</div>
            <div className="signup">Sign up</div>
          </MenuItem>
          <MenuItem>
            <p>Browse</p>
          </MenuItem>
        </MenuList>
      </Container>
    </Wrapper>
  );
};

export default Header;
