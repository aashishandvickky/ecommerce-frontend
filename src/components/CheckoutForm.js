// src/components/CheckoutForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { processCheckout } from '../actions/checkoutActions';

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(processCheckout({ name, email }));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Proceed to Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
