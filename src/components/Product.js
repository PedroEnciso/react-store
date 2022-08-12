import React from "react";
import styled from "styled-components";
import { MdFavoriteBorder } from "react-icons/md";

const Product = ({ product, setCart, cart }) => {
  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <ProductContainer>
      <ProductTop>
        <IconContainer className="text-xl">
          <MdFavoriteBorder className="text-dark-accent" />
        </IconContainer>
        <ImageContainer>
          <img src={product.image} alt={`${product.name}`} />
        </ImageContainer>
      </ProductTop>
      <Line className="bg-light" />
      <ProductLabel>
        <Title>{product.title}</Title>
        <Price className="text-sm">${product.price}</Price>
        <button onClick={addToCart}>Add to cart</button>
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
  padding: 1rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
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

const Line = styled.hr`
  border: 0;
  height: 0.5px;
`;

const ProductLabel = styled.div``;

const Title = styled.p`
  line-height: 1.25;
  font-weight: 600;
  text-align: center;
`;

const Price = styled.p`
  padding-top: 0.5rem;
  text-align: center;
`;

export default Product;
