import React from 'react';
import LogoIcon from '../../assets/LogoIcon';
import cse from '../../assets/cse.png';

// Router
import { Link } from 'react-router-dom';

// Icons
import Facebook from '../../assets/social/Facebook';
import Instagram from '../../assets/social/Instagram';
import Medium from '../../assets/social/Medium';
import Twitter from '../../assets/social/Twitter';

// Styled components
import {
  Container,
  FeedBack,
  FooterContainer,
  Legal,
  LegalLinks,
  Mission,
  Nav,
  Navigation,
  Social,
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Mission>
          <div className="icon__wrapper">
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
          <div className="mission__info">
            <p className="heading">OUR MISSION</p>
            <p>
              Legible empowers and connects authors and readers through an open
              access to a global reading and publishing platform.
            </p>
          </div>
          <div className="cse__container">
            <p>
              Legible is now a public company on the CSE.{' '}
              <a
                href="https://investors.legible.com/news/news-details/2021/Legible-Announces-Listing-Approval-on-the-Canadian-Securities-Exchange-CSE-Symbol-READ/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Learn more.
              </a>
            </p>

            <a
              href="https://investors.legible.com/overview/default.aspx"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img__wrapper">
                <img src={cse} alt="cse logo" />
              </div>
            </a>
          </div>
        </Mission>
        <Navigation>
          <p className="heading">GETTING STARTED</p>
          <Nav role="navigation" aria-label="Footer Menu">
            <Link to="/browse">Browse All</Link>
            <Link to="/about">About Us</Link>
            <Link to="/help">Help</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/publishers">For Publishers</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/investors">Investor Relations</Link>
          </Nav>
        </Navigation>
        <FeedBack>
          <p>
            The Legible Team is working to make our site fully accessible. If
            you are having trouble with any element of this website, please give
            us your feedback and we will work to improve it!
          </p>
          <button>FeedBack</button>
        </FeedBack>
        <Social>
          <a href="https://www.facebook.com/LegibleInc">
            <Facebook />
          </a>
          <a href="https://instagram.com/legible_inc">
            <Instagram />
          </a>
          <a href="https://medium.com/legible-media">
            <Medium />
          </a>
          <a href="https://twitter.com/Legible_Inc">
            <Twitter />
          </a>
        </Social>
      </Container>
      <Legal>
        <LegalLinks>
          <Link to="/legal">
            <p>Legal</p>
          </Link>
          <Link to="/privacy">
            <p>Privacy Policy</p>
          </Link>
        </LegalLinks>
        <p>© Legible Inc.</p>
      </Legal>
    </FooterContainer>
  );
};

// Styled components

export default Footer;
