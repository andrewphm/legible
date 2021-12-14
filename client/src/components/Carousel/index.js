import React from 'react';

import slide1 from '../../assets/slide1.svg';
import slide2 from '../../assets/slide2.svg';
import slide3 from '../../assets/slide3.svg';
import slide1img from '../../assets/slide1img.svg';
import slide2img from '../../assets/slide2img.svg';
import slide3img from '../../assets/slide3img.svg';

import {
  CarouselContainer,
  Controls,
  Slide,
  SlideContainer,
  Slider,
} from './Carousel.styles';

const Carousel = () => {
  return (
    <CarouselContainer>
      <Controls></Controls>
      <Slider>
        <SlideContainer>
          <Slide slide={slide1}>
            <div>
              <img src={slide1img} alt="" />
            </div>
            <article>
              <h1>Beautiful experiences</h1>
              <p>
                Crafted by authors, designers, and readers, Legible is making
                reading eBooks even better.
              </p>
              <button>Sign up</button>
            </article>
          </Slide>
        </SlideContainer>
        <SlideContainer>
          <Slide slide={slide2}></Slide>
        </SlideContainer>
        <SlideContainer>
          <Slide slide={slide3}></Slide>
        </SlideContainer>
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
