import styled from 'styled-components';

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
