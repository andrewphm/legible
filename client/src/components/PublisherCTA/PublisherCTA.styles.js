import styled from 'styled-components';

export const Section = styled.section`
  background-color: rgb(255, 242, 234);
  background-image: url(${(props) => props.publisher});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: min(16.1rem, 50%);
  padding: 20px;
`;

export const Container = styled.div``;

export const ImgWrapper = styled.div``;

export const Info = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

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
`;

export const Heading = styled.h2`
  font-size: 1.7rem;
`;
