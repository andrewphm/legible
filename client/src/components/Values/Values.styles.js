import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 5rem;
  padding: 70px 20px;
  text-align: center;
  background-color: var(--background-light);

  @media screen and (min-width: 1500px) {
    padding: 70px 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2``;

export const Quote = styled.figure`
  padding-top: 2rem;
  margin-bottom: 2rem;

  p {
    font-size: 20px;
  }

  figcaption {
    padding-top: 1.3rem;
  }
`;

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1500px) {
    grid-gap: 3rem;
  }
`;

export const Image = styled.div`
  height: 90px;
`;

export const Value = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding: 10px 0px;
  width: 330px;
  margin: 0 auto;

  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }
`;
