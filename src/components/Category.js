import React from "react";
import styled from "styled-components";

const Category = ({ name, onClick }) => {
  return (
    <CategoryButton className="text-sm" onClick={() => onClick(name)}>
      {name}
    </CategoryButton>
  );
};

const CategoryButton = styled.div`
  margin: 0rem 1rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-radius: 10px;
  color: var(--color-dark);
  background-color: var(--color-dark-opaque);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-dark);
    color: var(--bg-light);
  }
`;

export default Category;
