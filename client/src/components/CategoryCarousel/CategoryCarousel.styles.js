import styled from 'styled-components';

import bg from '../../assets/categorycarouselbg.svg';

export const Section = styled.section`
  background-image: url(${bg});
  background-position: bottom bottom;
  padding: 20px;
  height: 500px;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  .link {
    font-weight: 600;
    opacity: 0.8;
    letter-spacing: 0.12em;

    :hover {
      opacity: 1;
    }
  }
`;

export const BooksWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const BooksContainer = styled.ul`
  width: 100%;
  height: 350px;
  margin-bottom: 1rem;
  display: flex;
  column-gap: 1rem;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeadingTitle = styled.h2`
  font-size: clamp(20px, 4vw, 26px);
`;

export const HeadingDesc = styled.p`
  color: black;
`;
