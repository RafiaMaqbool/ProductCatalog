import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  height: 350px;
  flex-basis: 200px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-shrink: 0;
`;

const ExtraInfo = styled.div`
  margin-top: 12px;
  font-size: 0.9rem;
  color: #777;
  flex-shrink: 0;
`;

const AddToCartButton = styled.button`
  margin-top: auto;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Card = ({ title, image, extraInfo, onImageClick, onAddToCart }) => {
  return (
    <CardContainer>
      {image ? (
        <CardImage src={image} alt={title} onClick={onImageClick} />
      ) : (
        <p>No image available</p>
      )}
      <CardTitle>{title}</CardTitle>
      <ExtraInfo>{extraInfo}</ExtraInfo>
      <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default Card;
