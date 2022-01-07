import React, { useState, useEffect } from 'react';

// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Component
import { CheckoutForm } from '../../components/index';

// Styled components
import { Main, Section } from './Purchase.styles';

// React Router
import { useParams } from 'react-router-dom';

// API
import API from '../../API';

const stripePromise = loadStripe('pk_test_41BQHoiiuBaAIJaJBieuDRP7');

export const Purchase = () => {
  const [clientSecret, setClientSecret] = useState('');

  const { id } = useParams();

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
      <Section>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </Section>
    </Main>
  );
};

export default Purchase;
