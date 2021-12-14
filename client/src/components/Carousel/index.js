import React, { useState, useEffect } from 'react';

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

  const [slide, setSlide] = useState(0);

  const handleSlideClick = (e) => {
    const carousel = document.getElementById('slider');
    let value = e.target.value;

    setSlide(value);
    carousel.style.transform = `translateX(-${value}00%)`;
  };

  useEffect(() => {
    const pagination = document.querySelectorAll('.pagination');

    pagination.forEach((input) => (input.style.backgroundColor = 'white'));

    pagination[slide].style.backgroundColor = 'var(--primary-color)';
  }, [play, slide]);

  return (
    <CarouselContainer>
      <Slider id="slider">
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
                Find reads that inspire, thrill, and help us imagine a world
                where we all share our stories.
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
        <input
          onClick={handleSlideClick}
          value="0"
          type="button"
          className="pagination"
        />
        <input
          onClick={handleSlideClick}
          value="1"
          type="button"
          className="pagination"
        />
        <input
          onClick={handleSlideClick}
          value="2"
          type="button"
          className="pagination"
        />
      </Controls>
    </CarouselContainer>
  );
};

export default Carousel;
