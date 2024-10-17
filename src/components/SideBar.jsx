import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ddd;
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
