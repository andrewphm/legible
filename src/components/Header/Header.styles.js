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
  border: 1px solid red;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;
