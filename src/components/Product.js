import React from "react";
import styled from "styled-components";
import { MdFavoriteBorder } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductTop>
        <IconContainer className="text-xl">
          <MdFavoriteBorder className="text-dark-accent" />
        </IconContainer>
        <ImageContainer>
          <img src={product.image} alt={`photo of ${product.name}`} />
        </ImageContainer>
      </ProductTop>
      <ProductLabel>
        <Title>{product.title}</Title>
        <Price className="text-sm">${product.price}</Price>
      </ProductLabel>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 275px;
  border-radius: 10px;
  transition: box-shadow 0.4s;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1.25rem 1rem 1.25rem;
  overflow: hidden;
  background-color: #fff;
`;

const IconContainer = styled.div`
  width: fit-content;
  align-self: end;
`;

const ImageContainer = styled.div`
  height: 200px;
  padding: 1rem 0;
`;

const ProductLabel = styled.div``;

const Title = styled.p``;

const Price = styled.p``;

export default Product;
