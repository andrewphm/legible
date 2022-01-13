import { SearchOutlined } from '@material-ui/icons';
import React, { useRef } from 'react';
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
  WideNav,
  WideList,
} from './Header.styles';

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.slice(1);
  const menuButton = useRef(null);
  const menuNav = useRef(null);
  const profileNav = useRef(null);

  const handleMenuBlur = () => {
    menuNav.current.classList.remove('show-menu');
    menuButton.current.classList.remove('rotate');
    if (profileNav.current) profileNav.current.classList.remove('show-menu');

    let search = document.getElementById('search-container');

    search.classList.remove('show-menu');
  };

  const handleMenuClick = () => {
    if (profileNav.current) profileNav.current.classList.remove('show-menu');

    menuNav.current.classList.toggle('show-menu');
    menuButton.current.classList.toggle('rotate');
  };

  const handleSearchClick = () => {
    menuNav.current.classList.remove('show-menu');
    menuButton.current.classList.remove('rotate');
    if (profileNav.current) profileNav.current.classList.remove('show-menu');

    let search = document.getElementById('search-container');
    let input = document.getElementById('search-input');
    input.focus();
    search.classList.toggle('show-menu');
  };

  const handleProfileClick = () => {
    menuNav.current.classList.remove('show-menu');
    profileNav.current.classList.toggle('show-menu');
  };

  const handleSignOutClick = () => {
    dispatch(signout());
  };

  return (
    <Wrapper type="reader">
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
          to="/legible"
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
              ref={menuButton}
              className="menu__button"
              onClick={handleMenuClick}
              onBlur={handleMenuBlur}
            >
              <MenuIcon />
            </button>
          </Right>
        )}

        <WideNav>
          <WideList>
            <li className="search">
              <button className="search__btn" onClick={handleSearchClick}>
                <SearchIcon />
              </button>
            </li>
            <li>
              <Link to="/legible/browse" onClick={handleMenuBlur}>
                <button className="link-item">Browse</button>
              </Link>
            </li>
            <li>
              <Link to="/legible/faq" onClick={handleMenuBlur}>
                <button className="link-item">FAQ</button>
              </Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link to="/legible/log-in" onClick={handleMenuBlur}>
                    <button className="login__btn">Log In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/legible/sign-up" onClick={handleMenuBlur}>
                    <button className="signup__btn">Sign Up</button>
                  </Link>
                </li>
              </>
            )}

            {user && (
              <>
                <li>
                  <Link to="/legible/library" onClick={handleMenuBlur}>
                    <button className="library-btn">
                      <MyLibrary />
                    </button>
                  </Link>
                </li>
                <li>
                  <button
                    className="profile__button"
                    onBlur={handleMenuBlur}
                    onClick={handleProfileClick}
                  >
                    {user.displayName.split('')[0].toUpperCase()}
                  </button>
                </li>
              </>
            )}
          </WideList>
        </WideNav>
      </Container>

      <MenuList ref={menuNav} id="auth-nav">
        {user === null && (
          <MenuItem auth="auth">
            <Link
              onClick={handleMenuBlur}
              to="/legible/log-in"
              style={{
                width: 'fit-content',
                margin: '0 auto',
                display: 'flex',
              }}
            >
              <button className="login">Log in</button>
            </Link>
            <Link
              onClick={handleMenuBlur}
              to="/legible/sign-up"
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

        <MenuItem>
          <Link onClick={handleMenuBlur} to="/legible/browse">
            <p>Browse</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link onClick={handleMenuBlur} to="/legible/faq">
            <p>FAQ</p>
          </Link>
        </MenuItem>
      </MenuList>

      {user && (
        <MenuList ref={profileNav} id="profile-nav">
          {/* <MenuItem>
            <Link to={`/${user.username}`}>
              <p>My Profile</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard">
              <p>Dashboard</p>
            </Link>
          </MenuItem> */}
          <MenuItem lib="lib">
            <Link onClick={handleMenuBlur} to="/legible/library">
              <button className="library-btn">
                <MyLibrary />
              </button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link onClick={handleMenuBlur} to="/legible/wishlist">
              <p>My Wish List</p>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link onClick={handleMenuBlur} to="/legible">
              <p onClick={handleSignOutClick}>Sign out</p>
            </Link>
          </MenuItem>
        </MenuList>
      )}
    </Wrapper>
  );
};

export default Header;
