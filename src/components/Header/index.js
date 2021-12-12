import React from 'react';

import Logo from '../../assets/logo';

// Styled components
import { Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper type="reader">
      <Logo />
    </Wrapper>
  );
};

export default Header;
