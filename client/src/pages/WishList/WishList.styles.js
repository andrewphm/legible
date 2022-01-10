import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;

export const Section = styled.section`
  width: 100%;

  @media only screen and (min-width: 800px) {
    padding: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 4rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 4rem 8rem;
  }
`;

export const Heading = styled.h1``;

export const WishListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
`;

export const WishListItem = styled.li``;
