import styled from 'styled-components';

export const Container = styled.div`
  width: 135px;
  height: 294px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 500px) {
    height: 400px;
    width: 200px;

    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const ImgWrapper = styled.div`
  height: 74%;
  margin-bottom: 0.4rem;
  overflow: hidden;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Author = styled.p`
  font-size: 14px;
  width: 100%;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.p`
  margin: 0.4rem 0;
  font-weight: 500;
`;

export const LinkContainer = styled.div`
  display: flex;
  cursor: pointer;

  .heart-border {
    :hover path[d] {
      transform: scale(1.1);
      fill: rgb(203, 14, 14);
      d: path(
        'M 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 Z'
      ) !important;
    }
  }

  .heart-border-filled {
    path[d] {
      fill: rgb(203, 14, 14);
      d: path(
        'M 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 Z'
      ) !important;
    }

    :hover path[d] {
      transform: scale(1.1);
    }
  }
`;
