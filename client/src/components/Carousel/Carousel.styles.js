import styled from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
  height: 60vh;
  width: 100vw;
`;

export const Controls = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 40px;
  align-items: center;
  justify-content: center;
  column-gap: 2.5rem;

  button.icon {
    background-color: transparent;
    height: 1.8rem;
    width: 1.8rem;
    cursor: pointer;
  }

  button.pagination {
    border: 1px solid var(--primary-color);
    background-color: transparent;
    border-radius: 50%;
    height: 12px;
    width: 12px;
  }
`;

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: 1rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;

    h1 {
      color: var(--secondary-color);
      text-align: center;
      font-size: 1.8em;
      font-family: var(--secondary-font);
    }
    p {
      font-weight: 600;
      text-align: center;
    }
  }

  button {
    background-color: var(--secondary-color);
    color: white;
    font-weight: 600;
    padding: 10px 18px;
    border-radius: 18px;
    max-width: 80%;
    font-size: 1rem;
    cursor: pointer;

    :hover {
      background-color: rgb(36, 102, 80);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
