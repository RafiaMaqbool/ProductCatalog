import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`;

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // If no category is selected, fetch all products
    const fetchProducts = async () => {
      const endpoint = category
        ? `https://dummyjson.com/products/category/${category}`
        : 'https://dummyjson.com/products'; // Endpoint for all products

      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.thumbnail}
          extraInfo={`Price: $${product.price.toFixed(2)}`}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
