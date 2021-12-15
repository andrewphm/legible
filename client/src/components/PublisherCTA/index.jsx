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
          <Heading>
            Become a Legible
            <br></br>
            Publisher Partner
          </Heading>
          <p>Start selling beautiful, accessible eBooks on Legible.com</p>
          <button>Learn more</button>
        </Info>
      </Container>
    </Section>
  );
};

export default PublisherCTA;
