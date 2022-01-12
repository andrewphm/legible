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
  border-radius: 2px;

  button {
    padding: 8px 10px;
    background-color: white;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .active p {
    font-weight: 500;
  }

  .active p span {
    font-weight: 400;
  }

  .hidden-menu {
    position: absolute;
    top: 105%;
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
      padding: 8px 10px;

      :hover {
        background-color: rgb(241, 244, 245);
      }

      input {
        font-weight: 500;
        position: relative;
        font-size: 1rem;
        background-color: transparent;
        z-index: -1;
      }
    }

    .menu-item:last-child {
      border-bottom: none;
    }
  }

  .show-menu {
    display: flex;
  }

  .move-arrow {
    transform: rotate(180deg);
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
