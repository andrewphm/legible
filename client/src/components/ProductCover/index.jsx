import React from 'react';

import { FavoriteBorderOutlined } from '@material-ui/icons';

import {
  Author,
  Container,
  ImgWrapper,
  LinkContainer,
  Price,
  Thumb,
  Title,
} from './ProductCover.styles';

import { Link } from 'react-router-dom';

const ProductCover = ({ book }) => {
  const { author, image, price, title, _id } = book;

  return (
    <Container>
      <ImgWrapper>
        <Link to={`/book/${_id}`}>
          <Thumb src={image}></Thumb>
        </Link>
      </ImgWrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Price>{price > 0 ? 'CAD $' + price : 'FREE'}</Price>
      <LinkContainer>
        <FavoriteBorderOutlined className="heart-border"></FavoriteBorderOutlined>
      </LinkContainer>
    </Container>
  );
};

export default ProductCover;
