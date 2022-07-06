import React from "react";
import styled from "styled-components";
import { MdFavoriteBorder } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <ProductContainer>
      <ProductTop>
        <IconContainer>
          <MdFavoriteBorder className="text-dark-accent" />
        </IconContainer>
        <ImageContainer>
          <img src={product.image} alt={`photo of ${product.name}`} />
        </ImageContainer>
        <Price className="bg-light">{product.price}</Price>
      </ProductTop>
      <p>{product.title}</p>
      <Category className="text-light">{product.category}</Category>
      <ProductButton>add to cart</ProductButton>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  padding: 0.75rem 1rem 0rem;
  margin-bottom: 1.25rem;
`;

const IconContainer = styled.div`
  width: fit-content;
  align-self: flex-end;
  font-size: 1.75rem;
`;

const ImageContainer = styled.div`
  padding: 1rem 0;
`;

const Price = styled.p`
  width: fit-content;
  padding: 0.25rem 0.25rem;
`;

const Category = styled.p`
  font-size: 1rem;
`;

const ProductButton = styled.button`
  margin: 1rem auto 0rem;
  padding: 0.5rem 0rem;
  justify-self: end;
  border-radius: 10px;
  width: 75%;
  letter-spacing: 1.25px;
  border: 1px solid var(--color-dark);
  transition: 0.3s width, 0.3s background-color;
  cursor: pointer;

  &:hover {
    background-color: var(--color-dark);
    width: 100%;
    color: #fff;
  }
`;

export default Product;
