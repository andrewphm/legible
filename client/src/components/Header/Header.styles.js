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
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const MenuList = styled.nav`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.auth === 'auth' ? 'column' : 'row')};
  width: 100%;
  align-items: center;
  justify-content: ${(props) =>
    props.auth === 'auth' ? 'center' : 'flex-start'};
  padding: 20px 30px;
  row-gap: 1rem;
  font-weight: 500;
  color: grey;

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

  .login {
    width: 70%;
    text-align: center;
    border-radius: 15px;
    border: 1px solid var(--primary-color);
    font-weight: 600;
    color: var(--primary-color);
    padding: 5px;
    cursor: pointer;
    transition: var(--transition);

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

    :hover {
      opacity: 0.9;
    }
  }
`;
