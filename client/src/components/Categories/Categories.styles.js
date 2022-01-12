import styled from 'styled-components';

export const Section = styled.section`
  overflow: hidden;
  width: 100%;
  padding: 20px;

  h2 {
    font-size: clamp(20px, 4vw, 26px);
  }

  @media screen and (min-width: 1000px) {
    padding: 20px 65px;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  position: relative;

  .arrow {
    font-size: 1.8rem;
    text-align: center;
  }

  .arrow-left {
    font-size: 1.8rem;
    text-align: center;
    margin-left: 0.8rem;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  list-style: none;
  scroll-padding: 0px 50%;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryItem = styled.li``;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: 0.5rem;
  margin: 1.4rem 1.2rem;

  .img-wrapper {
    width: 120px;
    height: 120px;
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    padding-top: 0.5rem;
  }

  @media screen and (min-width: 500px) {
    row-gap: 1rem;

    h3 {
      font-size: 1.2rem;
    }

    .img-wrapper {
      width: 200px;
      height: 200px;
    }
  }
`;

export const LeftSlider = styled.div`
  display: none;
  position: absolute;
  top: 35%;
  left: -20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(250, 250, 250, 0.4);
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
export const RightSlider = styled.div`
  display: none;
  position: absolute;
  top: 35%;
  right: -30px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(250, 250, 250, 0.4);
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
