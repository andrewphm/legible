import React from 'react';

// UI Components
import {
  Carousel,
  Categories,
  SignUpCTA,
  PublisherCTA,
  LatestNews,
  Values,
  CategoryCarousel,
} from '../components/index';

// Redux
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Carousel />
      <Categories />
      <CategoryCarousel
        category="Romance"
        title="2021 Award Winners in Romance"
        desc="The books that have won the hearts of readers and award juries this year."
      />
      <CategoryCarousel
        category="Thriller"
        title="Thriller & Horror"
        desc="Perfect for fans of thrillers, suspense and ghost stories galore, these terrifying horror books will satisfy the scary story fan in all of us."
      />
      <CategoryCarousel
        category="Science Fiction"
        title="Science Fiction & Fantasy"
        desc="We asked, you answered: Your 50 favorite sci-fi and fantasy books of the past decade."
      />
      {!user && <SignUpCTA />}
      <PublisherCTA />
      <LatestNews />
      <Values />
    </div>
  );
};

export default Home;
