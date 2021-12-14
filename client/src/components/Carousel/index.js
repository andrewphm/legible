import React, { useState } from 'react';

import slide1 from '../../assets/slide1.svg';
import slide2 from '../../assets/slide2.svg';
import slide3 from '../../assets/slide3.svg';
import slide1img from '../../assets/slide1img.svg';
import slide2img from '../../assets/slide2img.svg';
import slide3img from '../../assets/slide3img.svg';
import Play from '../../assets/Play';
import Pause from '../../assets/Pause';

import {
  CarouselContainer,
  Controls,
  Slide,
  SlideContainer,
  Slider,
} from './Carousel.styles';

const Carousel = () => {
  const [play, setPlay] = useState(true);

  return (
    <CarouselContainer>
      <Slider>
        <SlideContainer>
          <Slide slide={slide1}>
            <div>
              <img
                src={slide1img}
                alt="Two people sitting on a picnic blanket leaning against each other reading from their phones"
              />
            </div>
            <article>
              <h1>Books unbound</h1>
              <p>
                Read your favourite book on any device wherever you have wifi.
              </p>
              <button>Create my free account </button>
            </article>
          </Slide>
        </SlideContainer>
        <SlideContainer>
          <Slide slide={slide2}>
            <div>
              <img src={slide2img} alt="Lady sitting and reading" />
            </div>
            <article>
              <h1>Beautiful experiences</h1>
              <p>
                Crafted by authors, designers, and readers, Legible is making
                reading eBooks even better.
              </p>
              <button>Create my free account </button>
            </article>
          </Slide>
        </SlideContainer>
        <SlideContainer>
          <Slide slide={slide3}>
            <div>
              <img src={slide3img} alt="Two people talking" />
            </div>
            <article>
              <h1>Storytelling for everyone</h1>
              <p>
                Inclusive of all voices, find reads that inspire, thrill, and
                help us imagine a world where we all share our stories.
              </p>
              <button>Create my free account </button>
            </article>
          </Slide>
        </SlideContainer>
      </Slider>
      <Controls aria-label="Choose slide to display">
        <button className="icon" onClick={() => setPlay((prev) => !prev)}>
          {play ? <Play /> : <Pause />}
        </button>
        <button className="pagination"></button>
        <button className="pagination"></button>
        <button className="pagination"></button>
      </Controls>
    </CarouselContainer>
  );
};

export default Carousel;
