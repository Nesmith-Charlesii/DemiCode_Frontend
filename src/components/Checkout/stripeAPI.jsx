import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/pure';
import CheckoutForm from '../CheckoutForm/checkoutForm';

const stripePromise = loadStripe("pk_test_51J8TYoEbNvMl2Uk9quctr7xSO83ohwZotY3nWUdEXieAipgfneQ0GRkDiWYmYjrLAc0ECpJIs6vDPdH4IvRd9NYL00VrkMI41h")

const Checkout = () => {
    return (
        <Elements stripe = {stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Checkout;