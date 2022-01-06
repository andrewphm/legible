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
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat',
    variables: {
      colorPrimary: '#213245',
    },
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
