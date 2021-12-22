import React from 'react';

// Styled components
import { Container, Info } from './SignUpCTA.styles';

import { Link } from 'react-router-dom';

const SignUpCTA = () => {
  return (
    <Container>
      <Info>
        <h3>Won't you join us on this journey? Sign up now!</h3>
        <Link to="/sign-up" style={{ color: '#fff' }}>
          <button>Sign me up</button>
        </Link>
        <p>No credit card needed.</p>
      </Info>
    </Container>
  );
};

export default SignUpCTA;
