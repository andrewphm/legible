import React, { useEffect, useState } from 'react';
import {
  Heading,
  Main,
  Section,
  WishListContainer,
  WishListItem,
} from './WishList.styles';

import { useSelector } from 'react-redux';

// API
import API from '../../API';

// UI Component
import { ProductCover } from '../../components/';

const WishList = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [wishList, setWishList] = useState(null);

  useEffect(() => {
    API.getWishList(user.wishList)
      .then((res) => {
        setWishList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main>
      <Section>
        <Heading>Your Wish List</Heading>
        <WishListContainer>
          {wishList?.length === 0 && (
            <h2>Your Wish List is currently empty...</h2>
          )}

          {wishList?.map((item, i) => {
            return (
              <WishListItem key={i}>
                <ProductCover book={item} />
              </WishListItem>
            );
          })}
        </WishListContainer>
      </Section>
    </Main>
  );
};

export default WishList;
