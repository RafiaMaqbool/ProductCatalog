import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from '../pages/ProductList';
import Cart from './Cart';

const Container = styled.div`
  background-color: #EADAD6;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const SideBarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]); // Cart state
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleCartVisibility = () => {
    setCartVisible(prevState => !prevState);
  };

  // Function to handle adding or updating product quantities in the cart
  const handleUpdateCart = (product, change) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) {
          return prevCart.filter(item => item.id !== product.id); // Remove the item if quantity is 0
        }
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }]; // Add new item with initial quantity of 1
      }
    });
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total items

  return (
    <Container>
      <NavBar toggleCart={toggleCartVisibility} itemCount={totalItemsInCart} />
      <FlexContainer>
        <SideBarWrapper>
          <SideBar onCategorySelect={handleCategorySelect} />
        </SideBarWrapper>
        <ContentWrapper>
          <ProductList category={selectedCategory} handleAddToCart={handleUpdateCart} /> 
        </ContentWrapper>
        {isCartVisible && <Cart cartItems={cart} onUpdateCart={handleUpdateCart} />} {/* Pass the update function */}
      </FlexContainer>
    </Container>
  );
};

export default Layout;
