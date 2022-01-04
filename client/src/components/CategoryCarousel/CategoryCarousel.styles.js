import styled from 'styled-components';

import bg from '../../assets/categorycarouselbg.svg';

export const Section = styled.section`
  background-image: url(${bg});
  background-position: center center;
  background-size: 300%;
  background-repeat: no-repeat;
  padding: 20px;
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

  @media screen and (min-width: 900px) {
    padding: 20px 65px;
  }
`;

export const LeftSlider = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 30px;
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
  top: 50%;
  right: 30px;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  .link {
    font-weight: 600;
    opacity: 0.8;
    letter-spacing: 0.12em;

    :hover {
      opacity: 1;
    }
  }
`;

export const BooksWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BooksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 1rem;
  list-style: none;
`;

export const HeadingTitle = styled.h2`
  font-size: clamp(20px, 4vw, 26px);
`;

export const HeadingDesc = styled.p`
  color: black;
`;
