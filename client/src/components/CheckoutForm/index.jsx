import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { Button, Form, PaymentMessage, Spinner } from './CheckoutForm.styles';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function CheckoutForm({ price, id }) {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user.currentUser);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `https://legible.andrewpham.ca/legible/library?id=${id}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      {user && (
        <>
          <Button disabled={isLoading || !stripe || !elements}>
            <span>{isLoading ? <Spinner></Spinner> : `Pay $${price} now`}</span>
          </Button>
          {/* Show any error or success messages */}
          {message && <PaymentMessage>{message}</PaymentMessage>}
          <div className="test">
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
        </>
      )}
      {!user && (
        <Link to="/legible/log-in">
          <Button>Log in to check out</Button>
        </Link>
      )}
    </Form>
  );
}
