import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #f8f9fa;
  border-left: 1px solid #dee2e6;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const Cart = ({ cartItems }) => {
  return (
    <CartContainer>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <CartItem key={index}>
            <strong>{item.title}</strong>
            <p>Price: ${item.price.toFixed(2)}</p>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;
