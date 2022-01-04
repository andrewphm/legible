import styled from 'styled-components';

export const Section = styled.section`
  background-color: rgb(255, 242, 234);
  height: 100%;
  padding: 20px;

  @media screen and (min-width: 500px) {
    padding: 20px 50px;
  }
  @media screen and (min-width: 700px) {
    padding: 20px 100px;
  }
  @media screen and (min-width: 1200px) {
    padding: 50px 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;

  @media screen and (min-width: 700px) {
    width: 80%;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 700px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 300px;
    bottom: -50px;
  }
`;

export const Info = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 400px;

  p {
    font-weight: 600;
    font-size: 1.2rem;
  }

  button {
    margin-top: 1rem;
    cursor: pointer;
    background-color: var(--secondary-color);
    color: white;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 18px;
    width: 130px;
    font-weight: 1.2rem;
    transition: var(--transition);

    :hover {
      background-color: var(--secondary-btn-color);
    }
  }

  @media screen and (min-width: 700px) {
    max-width: 700px;
  }
`;

export const Heading = styled.h2`
  font-size: 1.7rem;
`;
