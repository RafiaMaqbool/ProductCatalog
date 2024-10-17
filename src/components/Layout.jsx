import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Cart from './Cart';
import ProductList from '../pages/ProductList';

const Container = styled.div`
  background-color: #f0f0f0; 
`;

const FlexContainer = styled.div`
  display: flex;
`;

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <NavBar />
      <FlexContainer>
        <SideBar onCategorySelect={handleCategorySelect} />
        <ProductList category={selectedCategory} />
      </FlexContainer>
    </Container>
  );
};

export default Layout;
