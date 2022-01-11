import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;

export const Section = styled.section`
  width: 100%;
  min-height: 30vh;

  @media only screen and (min-width: 500px) {
    padding: 3rem 2rem;
  }
  @media only screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 4rem 8rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 4rem 10rem;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.7rem, 4vw, 2.2rem);
`;

export const WishListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;

  h2 {
    color: var(--secondary-color);
    font-size: 1.1rem;
  }
`;

export const WishListItem = styled.li``;
