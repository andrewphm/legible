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

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SignUpCTA />
      <PublisherCTA />
      <LatestNews />
      <Values />
    </div>
  );
};

export default Home;
