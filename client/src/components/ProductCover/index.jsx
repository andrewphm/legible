import React from 'react';

import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';

import {
  Author,
  Container,
  ImgWrapper,
  LinkContainer,
  Price,
  Thumb,
  Title,
} from './ProductCover.styles';

const ProductCover = ({ book }) => {
  const { author, image, price, title } = book;

  return (
    <Container>
      <ImgWrapper>
        <Thumb src={image}></Thumb>
      </ImgWrapper>
      <div>
        <Title>{title}</Title>
      </div>
      <div>
        <Author>{author}</Author>
      </div>
      <Price>{price > 0 ? 'CAD $' + price : 'FREE'}</Price>
      <LinkContainer>
        <FavoriteBorderOutlined className="heart-border"></FavoriteBorderOutlined>
      </LinkContainer>
    </Container>
  );
};

export default ProductCover;
