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
        <Price>${product.price}</Price>
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
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  transition: box-shadow 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const ProductTop = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 0rem 1rem 1.25rem;
  overflow: hidden;
`;

const IconContainer = styled.div`
  width: fit-content;
  align-self: end;
  font-size: 1.75rem;
`;

const ImageContainer = styled.div`
  height: 17rem;
  padding: 1rem 0;
`;

const ProductLabel = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-areas:
    "title price"
    "category";
  grid-template-columns: 4fr 1fr;
`;

const Title = styled.p`
  grid-area: "title";
  /* copied from google to keep the title from running in 2 lines */
  width: 100%; /* the element needs a fixed width (in px, em, %, etc) */
  overflow: hidden; /* make sure it hides the content that overflows */
  white-space: nowrap; /* don't break the line */
  text-overflow: ellipsis;
`;

const Price = styled.p`
  width: fit-content;
  justify-self: end;
  grid-area: "price";
  font-size: 1rem;
  font-weight: 600;
`;

const Category = styled.p`
  font-size: 1rem;
  grid-area: "category";
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
