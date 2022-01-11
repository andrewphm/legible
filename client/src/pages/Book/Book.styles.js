import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    max-width: 100%;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  width: auto;
  grid-template-areas:
    'book-cover'
    'book-info';
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 2fr;
    padding-top: 5rem;
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  margin-bottom: 2rem;

  .author {
    display: flex;

    span {
      font-weight: 700;
      margin-right: 0.3rem;
    }
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  line-height: 1.1;
  font-size: 28px;
`;

export const Author = styled.p`
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Cover = styled.aside`
  max-width: 225px;
  grid-area: cover;
  margin: 0 auto;

  @media screen and (min-width: 900px) {
    max-width: 275px;
  }
`;

export const BookCover = styled.div`
  grid-area: book-cover;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const BookInfo = styled.div`
  grid-ara: book-info;
  display: flex;
  flex-direction: column;
`;

export const WishList = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

export const WishListBtn = styled.button`
  background-color: white;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  width: 200px;
  padding: 8px 25px;
  border: 1px solid var(--primary-color);
  border-radius: 20px;
  cursor: pointer;

  .heart {
    margin-right: 0.5rem;
  }

  :hover {
    background-color: var(--primary-color);
    color: white;
  }

  :hover .heart {
    fill: white;
  }
`;

export const BuyNow = styled.div`
  border-top: 1px solid rgb(171, 187, 191);
  border-bottom: 1px solid rgb(171, 187, 191);
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  button {
    background-color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: white;
    font-size: 1rem;
    width: 130px;
    padding: 8px 25px;
    border-radius: 20px;
    cursor: pointer;

    :hover {
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
      background-color: white;
    }
  }

  .type {
    font-weight: 500;
  }

  .availability {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .price {
    font-weight: 600;
  }
`;

export const Description = styled.div`
  border-bottom: 1px solid rgb(171, 187, 191);
  padding: 1.3rem 0;
`;

export const Categories = styled.ul`
  margin: 1.5rem 0;
  list-style: none;

  span {
    font-weight: 600;
    font-color: rgb(43, 50, 56);
  }
`;

export const Category = styled.li`
  color: var(--secondary-color);
  font-weight: 600;
  width: fit-content;
  cursor: pointer;
  display: inline-block;
  text-transform: capitalize;

  :after {
    content: '|';
    margin: 0px 0.4rem;
    display: inline-block;
    text-decoration: none;
    height: 16px;
    color: var(--primary-color);
  }

  :hover {
    text-decoration: underline;
  }
`;

export const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-template-areas:
    'reviews'
    'details';
  gap: 2rem;

  h3 {
    margin-bottom: 0.9rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 'details reviews';
  }
`;

export const ProductDetails = styled.section`
  margin: 0 auto;
  padding: 1.5rem 0;
  border-top: 1px solid rgb(171, 187, 191);
  border-bottom: 1px solid rgb(171, 187, 191);
  grid-area: details;
  width: 100%;

  div p,
  p strong {
    color: rgb(43, 50, 56);
  }

  p strong {
    font-weight: 600;
  }

  .button-container {
    button {
      background-color: transparent;
      padding: 8px 20px;
      width: 150px;
      border-radius: 20px;
      color: rgb(203, 14, 14);
      border: 1px solid rgb(203, 14, 14);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      margin: 2rem 0;

      :hover {
        color: white;
        background-color: rgb(203, 14, 14);
      }
    }
  }

  @media screen and (min-width: 900px) {
    border: none;
    padding-left: 2.5rem;
  }
`;

export const Reviews = styled.section`
  margin: 1.5rem 0;
  padding-bottom: 2rem;
  height: 100%;
  grid-area: reviews;

  @media screen and (min-width: 900px) {
    border-top: 1px solid rgb(171, 187, 191);

    padding: 2rem 0;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  p {
    color: var(--third-color);
  }

  p span {
    color: var(--third-color);
    font-weight: 600;
  }
`;
