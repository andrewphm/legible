import React from 'react';

// UI Components
import {
  Carousel,
  Categories,
  SignUpCTA,
  PublisherCTA,
  LatestNews,
  Values,
} from '../components/index';

// Redux
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Carousel />
      <Categories />
      {!user && <SignUpCTA />}
      <PublisherCTA />
      <LatestNews />
      <Values />
    </div>
  );
};

export default Home;
