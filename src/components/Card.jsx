import React from 'react'; 
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  width: 100%;
  max-width: 250px;
  height: 320px;
  flex-basis: 200px;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-shrink: 0;
`;

const CardDescription = styled.p`
  margin-top: 8px;
  color: #555;
  flex-grow: 1;
  overflow: hidden;
`;

const ExtraInfo = styled.div`
  margin-top: 12px;
  font-size: 0.9rem;
  color: #777;
  flex-shrink: 0;
`;

const Card = ({ title, image, description, extraInfo }) => {
  return (
    <CardContainer>
      {image ? (
        <CardImage src={image} alt={title} />
      ) : (
        <CardDescription>No image available</CardDescription>
      )}
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      {extraInfo && <ExtraInfo>{extraInfo}</ExtraInfo>}
    </CardContainer>
  );
};

export default Card;
