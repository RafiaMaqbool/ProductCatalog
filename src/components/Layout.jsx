import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from '../pages/ProductList';

const Container = styled.div`
  background-color: #f0f0f0;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const SideBarWrapper = styled.div`
  width: 250px; /* Set a fixed width for the sidebar */
  flex-shrink: 0; /* Prevent the sidebar from shrinking */
`;

const ContentWrapper = styled.div`
  flex-grow: 1; /* The ProductList will take up the remaining space */
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
        <SideBarWrapper>
          <SideBar onCategorySelect={handleCategorySelect} />
        </SideBarWrapper>
        <ContentWrapper>
          <ProductList category={selectedCategory} />
        </ContentWrapper>
      </FlexContainer>
    </Container>
  );
};

export default Layout;
