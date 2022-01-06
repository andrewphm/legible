import styled from 'styled-components';

export const Container = styled.div`
  min-width: 135px;
  min-height: 294px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;

  @media screen and (min-width: 500px) {
    min-height: 400px;
    min-width: 200px;

    h3 {
      font-size: 1.1rem;
    }
  }

  .image {
    width: 100%;
    height: 70%;
    background-color: white;
  }

  .title {
    height: 1rem;
    width: 90%;
    background-color: white;
  }

  .author {
    height: 1rem;
    width: 70%;
    background-color: white;
  }

  .price {
    height: 1rem;
    width: 50%;
    background-color: white;
  }

  .image,
  .title,
  .author,
  .price {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
