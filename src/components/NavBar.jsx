import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.header`
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  max-width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  &:hover {
    color: #555;
  }
`;

const SearchForm = styled.form`
  display: flex; 
  margin-left: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 300px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 20px;
`;

const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #F0F0F0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ItemCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
`;

const NavBar = ({ toggleCart, itemCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <NavContainer>
      <StyledLink to="/">Product Catalog</StyledLink>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      <CartDiv>
        <IconWrapper onClick={toggleCart}>
          <FontAwesomeIcon icon={faCartShopping} style={{ width: '24px', height: '24px' }} />
        </IconWrapper>
        {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
      </CartDiv>
    </NavContainer>
  );
};

export default NavBar;
