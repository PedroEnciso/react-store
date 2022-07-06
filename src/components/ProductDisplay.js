import React from "react";
import styled from "styled-components";

const ProductDisplay = ({ allProducts }) => {
  return (
    <DisplayContainer>
      {allProducts.map((product) => {
        return (
          <div key={product.id}>
            {product.price} {product.title}
          </div>
        );
      })}
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export default ProductDisplay;
