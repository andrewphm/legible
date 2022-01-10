import React, { useEffect, useState } from 'react';
import { Heading, Main, Section, WishListContainer } from './WishList.styles';

import { useSelector } from 'react-redux';

// API
import API from '../../API';

const WishList = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [wishList, setWishList] = useState(null);

  useEffect(() => {
    API.getWishList(user.wishList)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main>
      <Section>
        <Heading></Heading>
        <WishListContainer></WishListContainer>
      </Section>
    </Main>
  );
};

export default WishList;
