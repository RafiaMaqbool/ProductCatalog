import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 800px;
  margin: 40px auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #2c3e50;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    color: #3498db;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  margin-bottom: 25px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const ProductInfo = styled.div`
  text-align: center;
  color: #333;
  
  & > h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c3e50;
  }

  & > p {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  & > p strong {
    font-weight: 600;
    color: #2c3e50;
  }
`;

const PriceTag = styled.p`
  font-size: 1.5rem;
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ProductDetails = ({ productId, onBack }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <ProductDetailsContainer>
      <BackButton onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </BackButton>
      <ProductImage src={product.thumbnail} alt={product.title} />
      <ProductInfo>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <PriceTag>${product.price.toFixed(2)}</PriceTag>
        <p><strong>Category:</strong> {product.category}</p>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
