import React from 'react';

// UI Components
import { Carousel, Categories, SignUp } from '../components/index';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SignUp />
    </div>
  );
};

export default Home;
