import { PinDropSharp } from '@material-ui/icons';
import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  transition: top 0.25s ease-in-out 0s;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(227, 227, 227);
  box-shadow: rgb(171 187 191 / 20%) 2px 2px 1rem;
  top: 0px;
  left: 0px;
  height: 4rem;
  display: flex;
  z-index: 100;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  justify-content: space-between;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  column-gap: 1rem;

  .menu__button {
    transition: var(--transition);
    cursor: pointer;
    background-color: transparent;

    :focus {
      transform: rotate(90deg);
    }
  }

  .search__button {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const MenuList = styled.nav`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 100%;
  left: 0;
  flex-direction: column;
  transition: var(--transition);
  z-index: -2;
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.auth === 'auth' ? 'column' : 'row')};
  width: 100%;
  align-items: center;
  justify-content: ${(props) =>
    props.auth === 'auth' ? 'center' : 'flex-start'};
  padding: 20px 30px;
  row-gap: 1rem;
  font-weight: 600;
  color: grey;
  z-index: -2;

  :nth-child(1) {
    border-bottom: 1px solid lightgrey;
  }

  :last-child {
    box-shadow: rgb(171 187 191 / 20%) 2px 2px 1rem;
  }

  :hover {
    color: ${(props) =>
      props.auth === 'auth' ? 'grey' : 'var(--primary-color)'};
    background-color: ${(props) =>
      props.auth === 'auth' ? 'none' : 'rgb(241, 244, 245)'};
  }

  p {
    cursor: pointer;
  }

  .login {
    position: relative;
    width: 70%;
    text-align: center;
    border-radius: 15px;
    border: 1px solid var(--primary-color);
    font-weight: 600;
    color: var(--primary-color);
    padding: 5px;
    cursor: pointer;
    transition: var(--transition);
    z-index: -2;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }

  .signup {
    width: 70%;
    text-align: center;
    border-radius: 15px;
    background-color: var(--secondary-color);
    font-weight: 600;
    color: white;
    padding: 5px;
    cursor: pointer;
    z-index: -2;

    :hover {
      opacity: 0.9;
    }
  }
`;
