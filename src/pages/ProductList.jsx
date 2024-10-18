import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import ProductDetails from './ProductDetails';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`;

const ProductList = ({ category, handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const endpoint = category
        ? `https://dummyjson.com/products/category/${category}`
        : 'https://dummyjson.com/products';

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

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBack = () => {
    setSelectedProductId(null);
  };

  return (
    <>
      {selectedProductId ? (
        <ProductDetails productId={selectedProductId} onBack={handleBack} />
      ) : (
        <ProductListContainer>
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              extraInfo={`Price: $${product.price.toFixed(2)}`}
              onImageClick={() => handleProductClick(product.id)} 
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </ProductListContainer>
      )}
    </>
  );
};

export default ProductList;
