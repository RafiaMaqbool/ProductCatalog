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

const ProductList = ({ category, searchQuery, activeFilter, handleAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let endpoint = 'https://dummyjson.com/products';

      if (activeFilter === 'search' && searchQuery) {
        // If activeFilter is 'search', fetch products based on the search query
        endpoint = `https://dummyjson.com/products/search?q=${searchQuery}`;
      } else if (activeFilter === 'category' && category) {
        // If activeFilter is 'category', fetch products based on the selected category
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
  }, [category, searchQuery, activeFilter]);  // Re-fetch when category, searchQuery, or activeFilter changes

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
