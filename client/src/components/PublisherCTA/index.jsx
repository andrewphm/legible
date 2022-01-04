import React from 'react';

// Images
import publisher from '../../assets/publisher.svg';

// Styled components
import {
  Section,
  Container,
  ImgWrapper,
  Info,
  Heading,
} from './PublisherCTA.styles';

const PublisherCTA = () => {
  return (
    <Section publisher={publisher}>
      <Container>
        <Info>
          <Heading>Become a Legible Publisher Partner</Heading>
          <p>Start selling beautiful, accessible eBooks on Legible.com</p>
          <button>Learn more</button>
        </Info>
        <ImgWrapper>
          <img src={publisher} alt="" />
        </ImgWrapper>
      </Container>
    </Section>
  );
};

export default PublisherCTA;
