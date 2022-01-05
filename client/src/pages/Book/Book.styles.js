import styled from 'styled-components';

export const Main = styled.main`
  padding: 0 30px;
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: min(100%, 69.2rem);
  width: auto;
  grid-template-areas:
    'header'
    'cover';
  gap: 2rem;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;
export const Title = styled.h1`
  font-weight: 700;
  line-height: 1.1;
  font-size: 28px;
`;

export const Author = styled.p`
  font-weight: 700;
  color: var(--secondary-color);
`;

export const Cover = styled.aside`
  max-width: 225px;
  grid-area: cover;
  margin: 0 auto;
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
  margin-bottom: 2rem;
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

export const Description = styled.div``;

export const Categories = styled.ul``;
