import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from '../pages/ProductList';
import Cart from './Cart';

const Container = styled.div`
  background-color: #f0f0f0;
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
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const toggleCartVisibility = () => {
    setCartVisible(prevState => !prevState);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Container>
      <NavBar toggleCart={toggleCartVisibility} itemCount={cart.length} /> 
      <FlexContainer>
        <SideBarWrapper>
          <SideBar onCategorySelect={handleCategorySelect} />
        </SideBarWrapper>
        <ContentWrapper>
          <ProductList category={selectedCategory} handleAddToCart={handleAddToCart} /> 
        </ContentWrapper>
        {isCartVisible && <Cart cartItems={cart} />}
      </FlexContainer>
    </Container>
  );
};

export default Layout;
