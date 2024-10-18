import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: white;
  padding: 20px;
  border-right: 1px solid #ddd;
  height: 100vh; 
  position: fixed;
  top: 10; 
  overflow-y: auto; 

  /* Custom Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the scrollbar track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;
  text-align: left;
  &:hover {
    background-color: #ccc;
  }
`;

const CategoryLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const Sidebar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <SidebarContainer>
      <Title>Categories</Title>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index} onClick={() => onCategorySelect(category.slug)}>
            <CategoryLink>{category.name}</CategoryLink>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
