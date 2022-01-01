import styled from 'styled-components';

import bg from '../../assets/categorycarouselbg.svg';

export const Section = styled.section`
  background-image: url(${bg});
  background-position: bottom bottom;
  padding: 20px;
  height: 500px;
  width: 100%;
`;

export const Wrapper = styled.div``;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  .link {
    font-weight: 600;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }
`;

export const BooksWrapper = styled.div`
  display: flex;
`;

export const BooksContainer = styled.ul``;

export const HeadingTitle = styled.h2`
  font-size: 1.4rem;
`;

export const HeadingDesc = styled.p`
  color: black;
`;
