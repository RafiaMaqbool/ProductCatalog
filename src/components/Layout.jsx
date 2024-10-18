import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from '../pages/ProductList';
import Cart from './Cart';

const Container = styled.div`
  background-color: #EADAD6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
`;

const SideBarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
`;

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState(() => {
    // Retrieve cart from local storage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isCartVisible, setCartVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Update local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveFilter('category');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setActiveFilter('search');
  };

  const toggleCartVisibility = () => {
    setCartVisible((prevState) => !prevState);
  };

  const handleUpdateCart = (product, change) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) {
          return prevCart.filter((item) => item.id !== product.id);
        }
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setMessage('Product already added to cart');
      setTimeout(() => setMessage(''), 3000);
      return true;
    } else {
      handleUpdateCart(product, 1);
      return false;
    }
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const handleClearCart = () => {
    setCart([]);
  };

  const handleShowAllProducts = () => {
    setSelectedCategory('');
    setActiveFilter('');
    setSearchQuery(''); 
  };

  return (
    <Container>
      <NavBar toggleCart={toggleCartVisibility} itemCount={totalItemsInCart} onSearch={handleSearch} onShowAllProducts={handleShowAllProducts} />
      <FlexContainer>
        <SideBarWrapper>
          <SideBar onCategorySelect={handleCategorySelect} />
        </SideBarWrapper>
        <ContentWrapper>
          <ProductList 
            category={selectedCategory} 
            searchQuery={searchQuery} 
            activeFilter={activeFilter} 
            handleAddToCart={handleAddToCart} 
            message={message} 
          />
        </ContentWrapper>
        {isCartVisible && <Cart cartItems={cart} onUpdateCart={handleUpdateCart} onClearCart={handleClearCart} />}
      </FlexContainer>
    </Container>
  );
};

export default Layout;
