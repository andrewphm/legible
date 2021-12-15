import styled from 'styled-components';

export const Section = styled.section`
  padding: 0px 2rem;
  margin-bottom: 100vh;

  h2 {
    font-size: 22px;
  }
`;

export const CategoryContainer = styled.div`
  width: 100vw;
  position: relative;
  left: -30px;
`;

export const CategoryList = styled.ul`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  list-style: none;
  scroll-padding: 0px 50%;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryItem = styled.li``;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 119px;
  row-gap: 0.5rem;
  margin: 1.4rem 1.2rem;

  .img-wrapper {
    height: 120px;
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
  }
`;
