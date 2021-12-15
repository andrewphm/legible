import React from 'react';
import backgroundImg from '../../assets/LatestNewsImg.svg';
import newscard1 from '../../assets/latest-news/newscard1.jpeg';

// Styled components
import {
  Section,
  Container,
  Grid,
  Button,
  Card,
  CardInfo,
} from './LatestNews.styles';

const NewsCard = () => {
  return (
    <Card>
      <img src={newscard1} alt="person with astronaut helmet" />
      <CardInfo>
        <p className="date">December 13, 2021</p>
        <p className="description">
          Spice Up Your Reading Life with a Sci-Fi Favorites on Legible.
        </p>
        <p className="author">by Marci Rae Johnson</p>
        <button>READ MORE</button>
      </CardInfo>
    </Card>
  );
};

const LatestNews = () => {
  return (
    <Section backgroundImg={backgroundImg}>
      <Container>
        <h2>Latest News</h2>
        <Grid>
          <NewsCard />
        </Grid>
        <Button>Read the Full Blog</Button>
      </Container>
    </Section>
  );
};

export default LatestNews;
