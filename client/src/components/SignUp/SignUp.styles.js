import styled from 'styled-components';

export const Container = styled.section`
  background-color: rgb(241, 244, 245);
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.4rem;

  h3 {
    font-weight: 300;
    font-size: 19px;
    text-align: center;
  }

  button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 17px;
    width: 150px;
    cursor: pointer;

    :hover {
      background-color: var(--secondary-btn-color);
    }
  }
`;
