import styled from 'styled-components';

export const Main = styled.main`
  min-height: 50vh;
`;

export const HeaderSection = styled.section`
  padding: 1.5rem 20px;
  border-bottom: 1px solid rgb(121, 146, 154);
`;

export const Heading = styled.h1`
  text-transform: capitalize;
  font-size: clamp(1.8rem, 5vw, 2.2rem);
`;

export const BodySection = styled.section`
  width: 100%;

  @media only screen and (min-width: 700px) {
    padding: 20px;
  }
`;

export const BooksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  list-style: none;
  padding: 2rem 0px;
  row-gap: 1rem;
`;

export const BookItem = styled.li``;
