import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  transition: top 0.25s ease-in-out 0s;
  border-bottom: 1px solid rgb(227, 227, 227);
  box-shadow: rgb(171 187 191 / 20%) 2px 2px 1rem;
  top: 0px;
  left: 0px;
  display: flex;

  #auth-nav {
    :after {
      z-index: 200;
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      transform: rotate(45deg);
      background-color: white;
      border-top: 1px solid lightgrey;
      border-left: 1px solid lightgrey;
      top: -9px;
      right: 23px;
    }
  }

  #profile-nav {
    :after {
      z-index: 200;
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      transform: rotate(45deg);
      background-color: white;
      border-top: 1px solid lightgrey;
      border-left: 1px solid lightgrey;
      top: -9px;
      right: 65px;
    }
  }

  @media screen and (min-width: 900px) {
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  justify-content: space-between;
  width: 100%;
  background-color: white;
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

  .profile__button {
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1rem;

    :hover {
      background-color: var(--secondary-btn-color);
      color: lightgrey;
    }
  }

  @media screen and (min-width: 900px) {
    .menu__button,
    .search__button {
      display: none;
    }
  }
`;

export const MenuList = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: -500%;
  left: 0;
  flex-direction: column;
  transition: var(--transition);
  z-index: 2;
  background-color: white;
  box-shadow: rgb(171 187 191 / 20%) 2px 2px 1rem;

  @media screen and (min-width: 500px) {
    width: 350px;
    left: initial;
    right: 0;
    border: 1px solid lightgrey;
    box-shadow: rgb(80 110 122 / 20%) 2px 2px 1rem;
  }
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
  z-index: 10;

  :last-child {
    z-index: -1;
    border-bottom: 1px solid lightgrey;
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
    width: 200px;
    text-align: center;
    border-radius: 15px;
    border: 1px solid var(--primary-color);
    font-weight: 600;
    color: var(--primary-color);
    padding: 5px;
    cursor: pointer;
    transition: var(--transition);
    margin: 0 auto;
    z-index: 100;
    background-color: #fff;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }

  .signup {
    width: 200px;
    text-align: center;
    border-radius: 15px;
    background-color: var(--secondary-color);
    font-weight: 600;
    color: white;
    padding: 5px;
    cursor: pointer;
    margin: 0 auto;
    z-index: 100;
    transition: var(--transition);

    :hover {
      background-color: var(--secondary-btn-color);
    }
  }

  .library-btn {
    width: 200px;
    padding: 8px;
    border: 1px solid var(--primary-color);
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
    margin: 0 auto;

    :hover {
      background-color: var(--primary-color);
    }
    :hover .library-asset {
      fill: #fff;
    }
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  transition: var(--transition);
  z-index: -10;
  display: flex;
  border-bottom: 1px solid rgb(227, 227, 227);
  box-shadow: rgb(171 187 191 / 20%) 2px 2px 1rem;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

export const Search = styled.div`
  border: 2px solid var(--secondary-color);
  border-radius: 15px;
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 90%;
  text-indent: 10px;
  margin-left: 5px;

  :focus {
    outline: none;
  }
`;

export const WideNav = styled.nav`
  display: none;

  #last-child {
    border: none;
  }

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const WideList = styled.ul`
  display: flex;
  list-style: none;
  column-gap: 1.3rem;
  align-items: center;

  .search {
    position: relative;
    top: 3px;
    transition: all 0.3s ease;

    :hover {
      transform: scale(1.1);
    }
  }

  li button {
    background-color: transparent;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
  }

  a .signup__btn {
    width: 100px;
    padding: 5px;
    border-radius: 18px;
    color: white;
    background-color: var(--secondary-color);
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: var(--secondary-btn-color);
    }
  }

  a .login__btn {
    width: 100px;
    padding: 5px;
    border-radius: 18px;
    border: 1px solid var(--primary-color);
    transition: all 0.3s ease-in-out;

    :hover {
      color: white;
      background-color: var(--primary-color);
    }
  }
`;
