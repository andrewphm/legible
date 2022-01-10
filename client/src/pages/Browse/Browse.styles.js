import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 500px;

  @media only screen and (min-width: 800px) {
    padding: 2rem 4rem;
  }

  @media only screen and (min-width: 1300px) {
    padding: 4rem 8rem;
  }
`;

export const Heading = styled.h1`
  font-size: 1.7rem;
  padding: 2rem 1.8rem;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  overflow: scroll;
  height: 4rem;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabsContainer = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgb(64, 128, 107);
  min-width: 420px;
`;

export const Tabs = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  min-width: 400px;
  margin-left: 1rem;
  column-gap: 2rem;

  .focused {
    border-bottom: 8px solid rgb(64, 128, 107);
    p {
      color: rgb(43, 50, 56);
      opacity: 1;
    }
  }
`;

export const TabItem = styled.li`
  position: relative;
  padding: 10px 0;
  font-size: 1rem;
  top: 4px;
  z-index: 2;
  cursor: pointer;

  p {
    color: rgb(108, 120, 127);
    letter-spacing: 0.05em;
    font-weight: 600;
    white-space: nowrap;
  }

  :hover p {
    color: rgb(43, 50, 56);
  }
`;

export const Section = styled.section`
  padding: 2rem 1rem;
  min-height: 50vh;
  width: 100%;
`;

export const BooksContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 2rem;
`;

export const BookItem = styled.li`
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const CategoriesContainer = styled.section``;

export const CategoriesList = styled.ul`
  list-style: none;
`;

export const CategoryItem = styled.li`
  padding: 4px 10px;
  max-width: 250px;

  :hover {
    background-color: lightgrey;
    filter: contrast(125%);
    border-radius: 20px;
  }

  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 600;
    cursor: pointer;
  }
`;
