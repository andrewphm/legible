import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  height: 100%;
  padding: 20px;
  width: 100%;

  p,
  a {
    color: white;
  }

  .heading {
    font-weight: 600;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const Mission = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .icon__wrapper {
    height: 40px;
    width: 40px;
  }

  .mission__info {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .cse__container {
    display: flex;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 8px 0px;
    margin: 2rem auto;
  }

  .cse__container a {
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const Navigation = styled.div`
  width: 100%;
`;

export const Nav = styled.nav`
  width: 100%;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;

  a {
    font-weight: 500;
    border-bottom: 1px solid white;
    padding: 12px 0px;
    width: 100%;

    :hover {
      text-decoration: underline;
      color: darkgrey;
    }
  }
`;

export const FeedBack = styled.div`
  margin: 1.7rem auto;

  p {
    font-weight: 500;
    padding-bottom: 0.8rem;
  }

  button {
    font-weight: 600;
    font-size: 1rem;
    background-color: white;
    padding: 4px 15px;
    border-radius: 17px;
    width: 110px;
    border: 1px solid white;
    transition: all 0.35s ease-in-out;
    cursor: pointer;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }
`;

export const Social = styled.div`
  color: white;
  display: flex;
  column-gap: 1rem;
  padding: 1rem 0;

  a {
    transition: all 0.35s ease;
  }

  a:hover {
    transform: scale(1.03);
  }
`;

export const Legal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  p {
    color: white;
  }
`;

export const LegalLinks = styled.nav`
  display: flex;
  column-gap: 1rem;
`;
