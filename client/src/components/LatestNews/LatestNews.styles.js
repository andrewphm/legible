import styled from 'styled-components';

export const Card = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  width: 340px;
  box-shadow: var(--box-shadow);
  transition: all 0.35s ease-in-out;
  background-color: white;
  margin: 0 auto;

  :hover {
    transform: scale(1.03);
  }

  img {
    height: 50%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 30%;
  }
`;

export const Anchor = styled.a``;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 10px 16px;
  justify-content: center;
  height: 100%;

  .date {
    font-weight: bold;
  }

  .description {
    font-size: 1.5rem;
  }

  button {
    background-color: transparent;
    width: fit-content;
    cursor: pointer;
    font-weight: 600;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const Section = styled.section`
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 200%;
  padding: 20px;

  @media screen and (min-width: 700px) {
    padding: 40px 50px;
  }

  @media screen and (min-width: 1400px) {
    background-size: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 1rem 0;

  h2 {
    font-size: clamp(24px, 4vw, 30px);
    color: white;
    padding-bottom: 1.5rem;

    @media screen and (min-width: 700px) {
      margin: 0 auto;
      padding-bottom: 1.5rem;
    }
  }
`;

export const NewsContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  margin: 1rem auto;
`;

export const Button = styled.button`
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 8px 15px;
  border-radius: 18px;
  background-color: white;
  font-weight: 600;
  width: 200px;
  font-size: 1.1rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  transition: all 0.35s ease;
  cursor: pointer;
  font-family: var(--primary-font);

  :hover {
    color: white;
    background-color: var(--primary-color);
    border: 1px solid white;
  }
`;
