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
      </ProductTop>
      <ProductLabel>
        <Title>{product.title}</Title>
        <Price className="bg-light">{product.price}</Price>
        <Category className="text-light">{product.category}</Category>
      </ProductLabel>
      <ProductButton>add to cart</ProductButton>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 0.75rem 1rem 1.25rem;
  overflow: hidden;
`;

const IconContainer = styled.div`
  width: fit-content;
  align-self: end;
  font-size: 1.75rem;
`;

const ImageContainer = styled.div`
  height: 20rem;
  padding: 1rem 0;
`;

const ProductLabel = styled.div`
  display: grid;
  grid-template-columns: 2fr, 1fr;
  grid-gap: 1rem;
`;

const Title = styled.p`
  grid-column: 1/2;
  /* copied from google to keep the title from running in 2 lines */
  width: 100%; /* the element needs a fixed width (in px, em, %, etc) */
  overflow: hidden; /* make sure it hides the content that overflows */
  white-space: nowrap; /* don't break the line */
  text-overflow: ellipsis;
`;

const Price = styled.p`
  width: fit-content;
  padding: 0.25rem 0.25rem;
  grid-column: 2/3;
`;

const Category = styled.p`
  font-size: 1rem;
`;

const ProductButton = styled.button`
  margin: 1rem auto 0rem;
  padding: 0.5rem 0rem;
  align-self: end;
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
