import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 5;
  height: 100%;
  width: 300px;
  background-color: rgba(248, 249, 250, 0.8);
  border-left: 1px solid #dee2e6;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ItemTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
  font-weight: 600;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 8px 12px;
`;

const ControlButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
`;
const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #222222;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background-color: #CF5E59;
  }
`;

const Cart = ({ cartItems, onUpdateCart }) => {
  const handleIncrement = (item) => {
    onUpdateCart(item, 1);
  };

  const handleDecrement = (item) => {
    onUpdateCart(item, -1);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <CartContainer>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>Price: ${item.price.toFixed(2)}</ItemPrice>
              <QuantityControls>
                <ControlButton onClick={() => handleDecrement(item)}>
                  <FontAwesomeIcon icon={faMinus} />
                </ControlButton>
                <QuantityDisplay>{item.quantity}</QuantityDisplay>
                <ControlButton onClick={() => handleIncrement(item)}>
                  <FontAwesomeIcon icon={faPlus} />
                </ControlButton>
              </QuantityControls>
            </CartItem>
          ))}
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;