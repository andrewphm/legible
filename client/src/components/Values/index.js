import React from 'react';

// Images
import Image1 from '../../assets/values/accessibility.js';
import Image2 from '../../assets/values/beauty.jsx';
import Image3 from '../../assets/values/integrity.jsx';
import Image4 from '../../assets/values/sustainability.jsx';
import img from '../../assets/categories/scifi.svg';

// Styled components
import {
  Section,
  Container,
  Heading,
  Quote,
  ValuesContainer,
  Value,
  Image,
} from './Values.styles';

const Values = () => {
  return (
    <Section>
      <Container>
        <Heading>Our Core Values</Heading>
        <Quote>
          <blockquote>
            <p>
              “If there's a book you really want to read, but it hasn't been
              written yet, then you must write it”
            </p>
          </blockquote>
          <figcaption>— Toni Morrison</figcaption>
        </Quote>
        <ValuesContainer>
          <Value>
            <Image>
              <Image1 />
            </Image>
            <h3>Accessibility</h3>
            <p>
              Many great writers worldwide haven’t yet shared their stories and
              many potential readers don’t have access to the books they need.
              That’s why we strive to provide equal access and opportunity—to
              bring more authors and readers together—by removing barriers to
              reading.
            </p>
          </Value>
          <Value>
            <Image>
              <Image2 />
            </Image>
            <h3>Sustainability</h3>
            <p>
              We’re committed to keeping print books and e-reading devices out
              of our oceans and landfills. That’s why we’re using already
              existing devices— smartphones and computers—to create a new
              platform for reading beautifully designed books.
            </p>
          </Value>
          <Value>
            <Image>
              <Image3 />
            </Image>
            <h3>Beauty</h3>
            <p>
              In literary terms, this means beautifully written words married to
              stunning design. Up until now, eBook platforms have ignored the
              importance of beauty and have focused instead on utility—getting
              the words on the digital page without considering layout or
              typography.
            </p>
          </Value>
          <Value>
            <Image>
              <Image4 />
            </Image>
            <h3>Integrity</h3>
            <p>
              We are committed to putting the needs of authors, readers, and
              publishers first. With our model, authors and publishers will
              never have to cut their revenue or compromise their design.
            </p>
          </Value>
        </ValuesContainer>
      </Container>
    </Section>
  );
};

export default Values;
