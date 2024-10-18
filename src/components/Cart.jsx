import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 350px;
  background-color: #ffffff;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
  transition: transform 0.3s ease-in-out;

  h3 {
    color: #333;
    margin-bottom: 20px;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 15px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
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
  background-color: #e7e7e7;
  border-radius: 5px;
  padding: 8px 12px;
`;

const ControlButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  color: #007bff;
  transition: color 0.2s ease;

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
  transition: background-color 0.3s ease;

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
              <ItemImage src={item.thumbnail} alt={item.title} />
              <ItemDetails>
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
              </ItemDetails>
            </CartItem>
          ))}
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
