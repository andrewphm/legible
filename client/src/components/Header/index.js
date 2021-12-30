import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';
import SearchIcon from '../../assets/SearchIcon';
import { useLocation } from 'react-router-dom';
import MyLibrary from '../../assets/MyLibrary';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/userRedux';

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
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.slice(1);

  const handleMenuBlur = () => {
    const nav = document.getElementById('auth-nav');
    let search = document.getElementById('search-container');
    const profileNav = document.getElementById('profile-nav');

    search.style.top = '-200%';
    setTimeout(() => {
      nav.style.top = '-500%';
      if (profileNav) profileNav.style.top = '-500%';
    }, 100);
  };

  const handleMenuClick = () => {
    const nav = document.getElementById('auth-nav');

    setTimeout(() => {
      nav.style.top = '130%';
    }, 100);
  };

  const handleSearchClick = () => {
    let search = document.getElementById('search-container');
    let input = document.getElementById('search-input');

    input.focus();
    search.style.top = '101%';
  };

  const handleProfileClick = () => {
    let nav = document.getElementById('profile-nav');

    setTimeout(() => {
      nav.style.top = '130%';
    }, 100);
  };

  const handleSignOutClick = () => {
    dispatch(signout());
  };

  return (
    <Wrapper type="reader">
      <MenuList id="auth-nav">
        {user === null && (
          <MenuItem auth="auth" style={{ borderBottom: '1px solid lightgrey' }}>
            <Link
              to="/log-in"
              style={{
                width: 'fit-content',
                margin: '0 auto',
                display: 'flex',
              }}
            >
              <button className="login">Log in</button>
            </Link>
            <Link
              to="/sign-up"
              style={{
                width: 'fit-content',
                margin: '0 auto',
                display: 'flex',
              }}
            >
              <button className="signup">Sign up</button>
            </Link>
          </MenuItem>
        )}

        {user && (
          <MenuItem auth="auth">
            <Link to="/library">
              <button className="library-btn">
                <MyLibrary />
              </button>
            </Link>
          </MenuItem>
        )}
        <MenuItem>
          <Link to="/browse">
            <p>Browse</p>
          </Link>
        </MenuItem>
      </MenuList>

      {user && (
        <MenuList id="profile-nav">
          <MenuItem>
            <Link to={`/${user.username}`}>
              <p>My Profile</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/wishlist">
              <p>My Wishlist</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">
              <p onClick={handleSignOutClick}>Sign out</p>
            </Link>
          </MenuItem>
        </MenuList>
      )}

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
        {path !== 'sign-up' && path !== 'log-in' && (
          <Right>
            <button className="search__button" onClick={handleSearchClick}>
              <SearchIcon />
            </button>

            {user && (
              <button
                className="profile__button"
                onBlur={handleMenuBlur}
                onClick={handleProfileClick}
              >
                AP
              </button>
            )}

            <button
              className="menu__button"
              onFocus={handleMenuClick}
              onBlur={handleMenuBlur}
            >
              <MenuIcon />
            </button>
          </Right>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;
