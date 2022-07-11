import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductDisplay = ({ allProducts }) => {
  return (
    <DisplayContainer>
      {allProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </DisplayContainer>
  );
};

const DisplayContainer = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2rem;
  justify-content: center;
`;

export default ProductDisplay;
