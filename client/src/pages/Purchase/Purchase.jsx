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
import { useParams } from 'react-router-dom';

// API
import API from '../../API';

const stripePromise = loadStripe('pk_test_41BQHoiiuBaAIJaJBieuDRP7');

export const Purchase = () => {
  const [clientSecret, setClientSecret] = useState('');

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
    // Create PaymentIntent as soon as the page loads
    // fetch('http://localhost:5000/api/stripe/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ items: [{ id }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setClientSecret(data.clientSecret);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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

  return (
    <Main>
      {book && (
        <Section>
          {console.log(book)}
          <Heading>Secure checkout</Heading>
          <Info>
            <p>
              You're purchasing the eBook:{' '}
              <span>
                <strong style={{ color: 'var(--secondary-color)' }}>
                  {book.title}
                </strong>
              </span>
            </p>
            <p>Enter your payment info to complete your purchase.</p>
            <p>
              Book name{' '}
              <span>
                will be available in your{' '}
                <strong style={{ color: 'var(--secondary-color)' }}>
                  Legible library.
                </strong>
              </span>
            </p>
            <div>
              <p>
                <strong>To test out a purchase use card info: </strong>
              </p>
              <p>
                Card number: <strong>4242 4242 4242 4242</strong>
              </p>
              <p>
                Expiry: <strong>01/24</strong>
              </p>
              <p>
                CVC: <strong>123</strong>
              </p>
              <p>
                Postal code: <strong>A1B 2C3</strong>
              </p>
            </div>
          </Info>

          <SectionContainer>
            <FormContainer>
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm price={book.price} />
                </Elements>
              )}
            </FormContainer>
            <ProductContainer>
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
                <p>${book.price}</p>
              </PriceContainer>
            </ProductContainer>
          </SectionContainer>
        </Section>
      )}
    </Main>
  );
};

export default Purchase;
