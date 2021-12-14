import styled from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
  height: 60vh;
  width: 100vw;
  border: 1px solid red;
`;

export const Controls = styled.div``;

export const Slider = styled.ul`
  height: 100%;
  display: flex;
  position: relative;
  touch-action: pan-y;
  width: 100%;
`;

export const SlideContainer = styled.li`
  height: 100%;
  min-width: 100vw;
  will-change: transform;
  list-style: none;
`;

export const Slide = styled.section`
  background-image: url(${(props) => props.slide});
  background-position: center bottom;
  background-size: 200%;
  background-repeat: no-repeat;
  min-width: 100%;
  height: 100%;
`;
