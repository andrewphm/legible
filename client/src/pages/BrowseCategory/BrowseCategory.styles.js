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

export const FilterContainer = styled.div`
  width: 100%;
  margin: 2rem 0px;
  border: 1.5px solid var(--secondary-color);
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 5px;
  border-radius: 2px;

  .hidden-menu {
    color: var(--third-color);
    position: absolute;
    top: 110%;
    left: -2px;
    width: calc(100% + 3px);
    display: none;
    flex-direction: column;
    border: 1.5px solid var(--secondary-color);
    background-color: white;
    border-radius: 2px;

    .menu-item {
      border-bottom: 1px dashed var(--secondary-color);
      cursor: pointer;
      position: relative;
      z-index: 1;
      padding: 5px;
    }

    .menu-item:last-child {
      border-bottom: none;
    }

    input {
      position: relative;
      font-size: 1rem;
      background-color: white;
      color: var(--third-color);
      z-index: -1;
    }
  }
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
  gap: 1rem;
`;

export const BookItem = styled.li``;
