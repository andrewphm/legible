import React from 'react';

// UI Components
import {
  Carousel,
  Categories,
  SignUp,
  PublisherCTA,
  LatestNews,
} from '../components/index';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SignUp />
      <PublisherCTA />
      <LatestNews />
    </div>
  );
};

export default Home;
