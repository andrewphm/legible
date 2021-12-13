import { Menu, MenuBookOutlined, Search } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo';

// Styled components
import { Wrapper, Container, Right, MenuList, MenuItem } from './Header.styles';

const Header = () => {
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
          <Search style={{ fontSize: 32 }} />
          <Menu style={{ fontSize: 32 }} />
        </Right>
        <MenuList>
          <MenuItem>
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
