import styled from 'styled-components';

export const Card = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  width: 340px;
  box-shadow: var(--box-shadow);
  transition: all 0.35s ease-in-out;

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
    transition: all 0.35s ease;

    :hover {
      transform: scale(1.05);
    }
  }
`;

export const Section = styled.section`
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: 200%;
  height: 500px;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h2 {
    color: white;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: auto;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin: 2rem auto;
`;

export const Button = styled.button`
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 8px 15px;
  border-radius: 18px;
  background-color: transparent;
  font-weight: 600;
  width: 200px;
  font-size: 1.1rem;
  margin: 0 auto;
  transition: all 0.35s ease;
  cursor: pointer;

  :hover {
    color: white;
    background-color: var(--primary-color);
  }
`;
