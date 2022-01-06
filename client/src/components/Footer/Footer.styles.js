import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  height: 100%;
  padding: 20px;
  width: 100%;
  position: relative;

  p,
  a {
    color: white;
  }

  .heading {
    font-weight: 600;
  }

  @media screen and (min-width: 1150px) {
    padding: 40px 70px;
  }
  @media screen and (min-width: 1500px) {
    padding: 50px 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  width: 100%;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    column-gap: 1rem;
    align-items: flex-start;
    margin-bottom: 3rem;
    justify-content: space-between;
  }
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
    width: 100%;
    justify-content: space-between;
  }

  .cse__container a {
    text-decoration: underline;
    font-weight: 600;
  }

  @media screen and (min-width: 700px) {
    flex: 2;
    max-width: 300px;
  }
`;

export const Navigation = styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    max-width: 330px;
    flex: 2;
  }

  @media screen and (min-width: 1500px) {
    max-width: 500px;
  }
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

  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const FeedBack = styled.div`
  margin: 1.7rem auto;
  width: 100%;

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

  @media screen and (min-width: 700px) {
    max-width: 300px;
    margin: 0;
    flex: 1;
  }

  @media screen and (min-width: 1500px) {
    max-width: 400px;
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

  @media screen and (min-width: 700px) {
    position: absolute;
    bottom: -30px;
    left: 0;
  }

  @media screen and (min-width: 1150px) {
    right: 150px;
    left: initial;
    bottom: 100px;
  }

  @media screen and (min-width: 1500px) {
    right: 250px;
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
