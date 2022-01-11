import styled from 'styled-components';

import faqsbg from '../../assets/faqs-bg.svg';

export const Main = styled.main`
  width: 100%;
`;

export const Hero = styled.section`
  position: relative;
  background-image: url(${faqsbg});
  /* background-size: 200%; */
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    height: 350px;
  }
`;
export const Heading = styled.h1`
  width: fit-content;
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0 auto;
  padding: 4rem 0;
  font-family: var(--secondary-font);

  @media only screen and (min-width: 1200px) {
    padding-top: 8rem;
  }
`;

export const FAQsContainer = styled.section`
  padding: 0 1rem;
  padding-top: 4rem;
  position: relative;
  top: -2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  row-gap: 2rem;

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.8rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;

    h3 {
      font-family: var(--secondary-font);
      font-size: clamp(1.2rem, 5vw, 1.6rem);
    }

    p {
      font-size: clamp(1rem, 2vw, 1.2rem);
      text-align: left;
      max-width: 600px;
    }
  }

  @media only screen and (min-width: 700px) {
    padding: 4rem 4rem 1rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 8rem 4rem 1rem;
    top: -6rem;
  }
`;

export const FAQsHeading = styled.h3`
  color: var(--third-color);
  letter-spacing: 0.005em;
`;

export const FAQsList = styled.ul`
  list-style: none;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const FAQsItem = styled.li`
  p {
    color: var(--third-color);
    padding: 0.5rem 0;
    padding-left: 2rem;
    font-size: clamp(1rem, 2vw, 1.2rem);
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  font-weight: 500;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;
  font-family: var(--secondary-font);

  .arrow-icon {
    fill: var(--secondary-color);
    z-index: -1;
    margin-right: 0.5rem;
  }
`;
