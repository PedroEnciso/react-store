import React from "react";
import styled from "styled-components";

const Category = ({ name, onClick, style }) => {
  return (
    <CategoryButton
      className={`text-sm ${style}`}
      onClick={() => onClick(name)}
    >
      {name}
    </CategoryButton>
  );
};

const CategoryButton = styled.div`
  margin: 0rem 1rem;
  padding: 0.3rem 0.45rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.4s, background-color 0.4s;
`;

export default Category;
