import React, { useState, useEffect } from 'react';

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Component
import { CheckoutForm } from '../../components/index';

// Styled components
import {
  Author,
  BookInfoContainer,
  FormContainer,
  Heading,
  Image,
  ImageWrapper,
  Info,
  Main,
  ProductContainer,
  Section,
  Title,
  PriceContainer,
  SectionContainer,
} from './Purchase.styles';

// React Router
import { useParams, useNavigate, Link } from 'react-router-dom';

// API
import API from '../../API';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userRedux';

const stripePromise = loadStripe('pk_test_41BQHoiiuBaAIJaJBieuDRP7');

export const Purchase = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        let res = await API.getBook(id);
        setBook(res[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, []);

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        let res = await API.createPaymentIntent({ items: [{ id }] });

        setClientSecret(res.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    initiatePayment();
  }, []);

  const appearance = {
    theme: 'stripe',
    variables: {},
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    // Change user state
    dispatch(setCurrentUser({ ...user, library: [...user.library, id] }));
    // update user in DB
    API.updateUser({ ...user, library: [...user.library, id] });
    // Redirect to Library
    navigate('/library', { replace: true });
  };

  return (
    <Main>
      {book && (
        <Section>
          <Heading>Secure checkout</Heading>
          <Info>
            <p>
              You're purchasing the eBook:{' '}
              <span>
                <strong>
                  <Link
                    to={`/book/${id}`}
                    style={{ color: 'var(--secondary-color)' }}
                  >
                    {book.title}
                  </Link>
                </strong>
              </span>
            </p>
            <p>Enter your payment info to complete your purchase.</p>
            <p>
              {book.title}{' '}
              <span>
                will be available in your{' '}
                <strong>
                  <Link
                    style={{ color: 'var(--secondary-color)' }}
                    to="/library"
                  >
                    Legible library.
                  </Link>
                </strong>
              </span>
            </p>
          </Info>

          <SectionContainer>
            {clientSecret && (
              <FormContainer>
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm price={book.price} id={id} />
                </Elements>
              </FormContainer>
            )}
            <ProductContainer price={book.price}>
              <ImageWrapper>
                <Image src={book.image}></Image>
              </ImageWrapper>

              <BookInfoContainer>
                <Title>{book.title}</Title>
                <Author>by {book.author}</Author>
                <p>Regular price: CAD ${book.price}</p>
              </BookInfoContainer>
              <PriceContainer>
                <p>
                  <strong>TOTAL:</strong>
                </p>
                <p>
                  <strong>{`${
                    book.price > 0 ? '$ ' + book.price : 'FREE'
                  }`}</strong>
                </p>
              </PriceContainer>
              {book.price === 0 && (
                <button onClick={handleBtnClick}>Add to library</button>
              )}
            </ProductContainer>
          </SectionContainer>
        </Section>
      )}
    </Main>
  );
};

export default Purchase;
