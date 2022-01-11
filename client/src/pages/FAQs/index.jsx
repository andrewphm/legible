import React from 'react';
import {
  FAQsContainer,
  Heading,
  Main,
  Hero,
  FAQsList,
  FAQsItem,
  ItemContainer,
} from './FAQs.styles';

import { ArrowForwardIos } from '@material-ui/icons';

const FAQs = () => {
  const handleClick = (e) => {
    console.log(e.target.firstChild);
    let arrow = e.target.firstChild;

    let sibling = e.target.nextSibling;

    if (sibling.style.display === 'none') {
      sibling.style.display = 'flex';
      arrow.style.transform = 'rotate(90deg)';
    } else {
      sibling.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <Main>
      <Hero>
        <Heading>FAQs</Heading>
      </Hero>
      <FAQsContainer>
        <div className="description">
          <h3>Welcome to Legible!</h3>
          <p>
            Our aim is to make reading and publishing simple and accessible to
            all. With Legible, now you can read online using any browser.
            Members can purchase books from our catalogue or choose from a
            carefully curated selection of public domain books to read for free.
          </p>
        </div>

        <FAQsList>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              How do I add books to My Library?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              All your purchased books can be found in your Library.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              Can I download a book in My Library to read off-line?{' '}
            </ItemContainer>
            <p style={{ display: 'none' }}>
              Downloading and reading offline will be coming soon!
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              Will My Library sync across my devices?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              Yes, you will be able to access your books and pick up where you
              left off on any device.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              Does Legible offer refunds?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              No, Legible does not offer refunds on eBooks. If you have an
              extenuating circumstance you would like to discuss with us, please
              email support@legible.com.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              My book won’t load. What should I do?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              Please contact support@legible.com, and let us know which book is
              giving you trouble and how you are attempting to view it (mobile,
              computer, which browser, etc.) so that we can resolve the issue.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>
              My book won’t load. What should I do?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              Please contact support@legible.com, and let us know which book is
              giving you trouble and how you are attempting to view it (mobile,
              computer, which browser, etc.) so that we can resolve the issue.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>I can’t
              log into my account. What should I do?
            </ItemContainer>
            <p style={{ display: 'none' }}>
              If you cannot remember your password, click “forgot password”
              under the password field on the login page. If you’re having
              trouble with your email address, please contact
              support@legible.com.
            </p>
          </FAQsItem>
          <FAQsItem>
            <ItemContainer onClick={handleClick}>
              <ArrowForwardIos className="arrow-icon"></ArrowForwardIos>A book
              has disappeared from My Library.
            </ItemContainer>
            <p style={{ display: 'none' }}>
              If a book has disappeared from your library and you can no longer
              find it when you search Legible, it may have been removed by the
              publisher or author.
            </p>
          </FAQsItem>
        </FAQsList>
      </FAQsContainer>
    </Main>
  );
};

export default FAQs;
