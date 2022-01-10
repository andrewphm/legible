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
      {console.log(wishList)}
      <Section>
        <Heading>Your Wish List</Heading>
        <WishListContainer>
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
