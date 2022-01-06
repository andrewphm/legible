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

import { useSelector, useDispatch } from 'react-redux';

import { setCurrentUser } from '../../redux/userRedux';

const ProductCover = ({ book }) => {
  const { author, image, price, title, _id } = book;

  //Redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const handleWishlistClick = () => {
    // Removes book from Wishlist
    if (user.wishList.includes(_id)) {
      const index = user.wishList.indexOf(_id);
      let wishList = [...user.wishList];
      wishList.splice(index, 1);

      dispatch(setCurrentUser({ ...user, wishList: [...wishList] }));

      // Update DB
    } else {
      // Add book to Wishlist
      dispatch(setCurrentUser({ ...user, wishList: [...user.wishList, _id] }));

      // Update DB
    }
  };

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
        {!user ? (
          <Link to="/log-in">
            <FavoriteBorderOutlined className="heart-border"></FavoriteBorderOutlined>
          </Link>
        ) : (
          <FavoriteBorderOutlined
            onClick={handleWishlistClick}
            className={
              user.wishList.includes(_id)
                ? 'heart-border-filled'
                : 'heart-border'
            }
          ></FavoriteBorderOutlined>
        )}
      </LinkContainer>
    </Container>
  );
};

export default ProductCover;
