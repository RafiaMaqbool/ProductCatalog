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
  background-color: #EADAD6;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;

const ProductList = ({ category, searchQuery, activeFilter, handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      let endpoint = 'https://dummyjson.com/products';

      if (activeFilter === 'search' && searchQuery) {
        endpoint = `https://dummyjson.com/products/search?q=${searchQuery}`;
      } else if (activeFilter === 'category' && category) {
        endpoint = `https://dummyjson.com/products/category/${category}`;
      }

      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, searchQuery, activeFilter]);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBack = () => {
    setSelectedProductId(null);
  };

  const handleProductAddToCart = (product) => {
    const alreadyInCart = handleAddToCart(product);
    if (!alreadyInCart) {
      setMessage('Product already added to cart');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <>
      <Title>Product Catalog</Title>
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
      {message && <p>{message}</p>}
    </>
  );
};

export default ProductList;
