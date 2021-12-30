import styled from 'styled-components';

export const CarouselContainer = styled.section`
  position: relative;
  width: 100vw;
  overflow: hidden;
  padding-bottom: 40px;
  margin-bottom: 3rem;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0px;
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

  input.pagination {
    border: 1px solid var(--primary-color);
    background-color: transparent;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    cursor: pointer;
    transition: all 0.35s ease;
    color: transparent;

    :hover {
      background-color: var(--primary-color);
    }
  }
`;

export const Slider = styled.ul`
  display: flex;
  position: relative;
  touch-action: pan-y;
  width: 100%;
  transition: all 0.5s ease;
  transform: translateX(-0%);
`;

export const SlideContainer = styled.li`
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
      font-size: 1.9em;
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

  .image-wrapper {
    width: 90%;
    max-width: 350px;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
    column-gap: 1rem;
    justify-content: center;

    article {
      max-width: 400px;
      align-items: flex-start;

      h1 {
        text-align: left;
        font-size: clamp(30px, 4vw, 65px);
      }

      p {
        text-align: left;
        font-size: clamp(16px, 3vw, 25px);
      }
    }

    .image-wrapper {
      min-width: 250px;
    }
  }

  @media screen and (min-width: 900px) {
    column-gap: 5rem;

    .image-wrapper {
      max-width: 500px;
    }

    article {
      max-width: 550px;
    }
  }
`;
