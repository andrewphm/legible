import React from 'react';

import notFound from '../assets/404notfound.svg';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;
  row-gap: 2rem;

  h1 {
    font-size: 1.3rem;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Sorry the page you're looking for isn't quite ready...</h1>
      <Image src={notFound} />
    </Container>
  );
};

export default NotFound;
