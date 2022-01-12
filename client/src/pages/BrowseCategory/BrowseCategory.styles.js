import styled from 'styled-components';

export const Main = styled.main`
  min-height: 50vh;
`;

export const HeaderSection = styled.section`
  padding: 1rem 20px;
  border-bottom: 1px solid rgb(121, 146, 154);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (min-width: 500px) {
    margin: 0px 1rem;
  }

  @media screen and (min-width: 700px) {
    margin: 0px 1.2rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 0px 3rem;
  }

  @media screen and (min-width: 1300px) {
    margin: 0px 6rem;
  }
`;

export const Heading = styled.h1`
  text-transform: capitalize;
  font-size: clamp(1.8rem, 5vw, 2.2rem);
`;

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 280px;
  border: 1.5px solid var(--secondary-color);
  display: flex;
  position: relative;
  justify-content: space-between;
  border-radius: 2px;
  font-size: 0.9rem;

  button {
    padding: 7px 10px;
    background-color: white;
    font-size: 0.9rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .active p {
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
    text-align: left;
  }

  .active p span {
    font-weight: 400;
  }

  .hidden-menu {
    position: absolute;
    top: 108%;
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
      padding: 7px 10px;
      font-size: 0.9rem;

      :hover {
        background-color: rgb(241, 244, 245);
      }

      input {
        font-weight: 500;
        position: relative;
        font-size: 0.9rem;
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

export const ResultsInfo = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding-top: 0.8rem;

  @media only screen and (min-width: 700px) {
    align-items: center;
    flex-direction: row;
    column-gap: 2rem;
  }
`;
