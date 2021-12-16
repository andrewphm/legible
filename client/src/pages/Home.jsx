import React from 'react';

// UI Components
import {
  Carousel,
  Categories,
  SignUp,
  PublisherCTA,
  LatestNews,
  Values,
  Footer,
} from '../components/index';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <SignUp />
      <PublisherCTA />
      <LatestNews />
      <Values />
      <Footer />
    </div>
  );
};

export default Home;
