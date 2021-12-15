import React from 'react';
import backgroundImg from '../../assets/LatestNewsImg.svg';

// Styled components
import { Section, Container, Grid, Button } from './LatestNews.styles';

const LatestNews = () => {
  return (
    <Section backgroundImg={backgroundImg}>
      <Container>
        <h2>Latest News</h2>
        <Grid></Grid>
        <Button>Read the Full Blog</Button>
      </Container>
    </Section>
  );
};

export default LatestNews;
