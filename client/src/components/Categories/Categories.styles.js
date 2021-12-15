import styled from 'styled-components';

export const Section = styled.section`
  padding: 0px 2rem;

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
`;

export const CategoryItem = styled.li``;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin: 2.4rem 1.3rem;
  width: 119px;

  img {
    width: 100%;
    height: auto;
  }
`;
