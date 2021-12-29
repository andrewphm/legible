import React from 'react';

import notFound from '../assets/404notfound.svg';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  h1 {
    font-size: 1.3rem;
  }

  button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 17px;
    width: 150px;
    cursor: pointer;
    transition: var(--transition);

    :hover {
      background-color: var(--secondary-btn-color);
    }
  }
`;

const Image = styled.img`
  width: 80%;
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Sorry the page you're looking for is still under construction...</h1>

      <Link to="/">
        <button>Go back home</button>
      </Link>
      <Image src={notFound} />
    </Container>
  );
};

export default NotFound;
