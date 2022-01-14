import styled from 'styled-components';

export const Main = styled.main`
  min-height: 60vh;
  width: 100%;
`;

export const Container = styled.section`
  padding: 20px;
  margin: 0 auto;
  border-bottom: 1px solid rgb(121, 146, 154);
  margin-bottom: 1rem;

  @media only screen and (min-width: 800px) {
    margin: 2rem 4rem;
  }
  @media only screen and (min-width: 1000px) {
    margin: 2rem auto;
    max-width: 900px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;

export const BookSection = styled.section``;

export const BooksContainer = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0 auto;

  .rotate {
    transform: rotate(180deg);
  }

  @media only screen and (min-width: 776px) {
    max-width: 800px;
  }
  @media only screen and (min-width: 1000px) {
    max-width: 900px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1100px;
  }
`;

export const ListItem = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'cover text'
    'cover text'
    'description description';
  column-gap: 1rem;
  border-bottom: 1px solid rgb(227, 227, 227);
  overflow: hidden;
  padding: 1rem 10px;

  :nth-child(odd) {
    background: rgb(249, 249, 249);
  }

  @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 2.5fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      'cover text'
      'cover text'
      'cover description';
  }
`;

export const DescriptionContainer = styled.div`
  grid-area: description;
  width: 100%;

  a {
    width: 100%;
  }

  button {
    background: none;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: rgb(95, 108, 116);
    font-weight: 600;
    cursor: pointer;

    :hover {
      color: var(--third-color);
    }

    svg {
      fill: var(--third-color);
    }
  }

  .expand-description {
    max-height: initial;
  }
`;

export const Description = styled.p`
  max-height: 4.7rem;
  overflow: hidden;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-overflow: ellipsis;
  white-space: wrap;
`;

export const Cover = styled.div`
  grid-area: cover;
  min-width: 100px;
  margin-left: auto;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 165px;
`;

export const CTA = styled.span`
  grid-area: cta;
  display: flex;
  column-gap: 0.6rem;
`;

export const Info = styled.div`
  grid-area: text;
  display: flex;
  flex-flow: column;
  row-gap: 0.5rem;
  width: 100%;

  p {
    text-transform: capitalize;
  }

  .title-container {
    width: 100%;
  }
`;

export const BookTitle = styled.h3`
  width: 225px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: var(--secondary-font);

  @media only screen and (min-width: 500px) {
    width: 320px;
  }
`;
