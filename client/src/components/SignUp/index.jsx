import React from 'react';

// Styled components
import { Container, Info } from './SignUp.styles';

const SignUp = () => {
  return (
    <Container>
      <Info>
        <h3>Won't you join us on this journey? Sign up now!</h3>
        <button>Sign me up</button>
        <p>No credit card needed.</p>
      </Info>
    </Container>
  );
};

export default SignUp;
