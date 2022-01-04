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
  return (
    <Container>
      <ImgWrapper>
        <Thumb src="https://imgcdn2.legible.com/legible/w:342/plain/s3://legibledepot/855b41f4-81f2-47b0-9fd1-b703fd9c8f25/metadata/20211007/9781459747104.jpg"></Thumb>
      </ImgWrapper>
      <div>
        <Title>Homeland Elegies Homeland Elegies</Title>
      </div>
      <div>
        <Author>by Ayad Akhtar</Author>
      </div>
      <Price>CAD $14.99</Price>
      <LinkContainer>
        <FavoriteBorderOutlined className="heart-border"></FavoriteBorderOutlined>
      </LinkContainer>
    </Container>
  );
};

export default ProductCover;
