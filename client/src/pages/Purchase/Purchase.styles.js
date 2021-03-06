import styled from 'styled-components';

export const Main = styled.main`
  padding: 0px 10px;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 7rem;
  row-gap: 1rem;

  @media only screen and (min-width: 800px) {
    padding: 5rem 1rem;
    padding-bottom: 10rem;
  }
`;

export const Heading = styled.h1`
  font-size: 1.2rem;
`;

export const Info = styled.div`
  box-shadow: rgb(80 110 122 / 20%) 2px 2px 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;

  @media only screen and (min-width: 800px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 2rem;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
`;

export const ProductContainer = styled.div`
  flex: 1;
  box-shadow: rgb(80 110 122 / 20%) 2px 2px 1rem;
  display: flex;
  flex-direction: column;
  padding: 28px;

  button {
    background: var(--primary-color);
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 300px;
    margin: 1rem auto;
  }

  @media only screen and (min-width: 800px) {
    position: relative;
    top: ${(props) => (props.price > 0 ? '-126px' : '0')};
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(171, 187, 191);

  padding: 1rem 0px;

  p {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Author = styled.p`
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
`;
