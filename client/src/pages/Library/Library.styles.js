import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  padding: 2rem 15px;
  min-height: 500px;

  @media only screen and (min-width: 500px) {
    padding: 3rem 2rem;
  }

  @media only screen and (min-width: 900px) {
    padding: 3rem 5rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 100px 200px;
  }
`;

export const Section = styled.section``;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  flex-wrap: wrap;
`;

export const LogoContainer = styled.div`
  width: 120px;
`;

export const Heading = styled.h3`
  color: rgb(95, 108, 116);
  letter-spacing: 0.05em;
`;

export const LibraryContainer = styled.ul`
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  justify-content: center;

  .books-btn {
    background-color: white;
    border: 1px solid var(--primary-color);
    padding: 8px 20px;
    width: 200px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    display: block;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }

  @media screen and (min-width: 500px) {
    justify-content: flex-start;
  }
`;
