import React from 'react';

// UI Components
import {
  Carousel,
  Categories,
  SignUp,
  PublisherCTA,
} from '../components/index';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SignUp />
      <PublisherCTA />
    </div>
  );
};

export default Home;
