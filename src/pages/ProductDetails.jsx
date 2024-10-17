import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Details = styled.div`
  flex: 2;
`;

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state; // retrieve the product from state

  return (
    <DetailsContainer>
      <ImageContainer>
        <ProductImage src={product.thumbnail} alt={product.title} />
      </ImageContainer>
      <Details>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        {/* More details if necessary */}
      </Details>
    </DetailsContainer>
  );
};

export default ProductDetails;
