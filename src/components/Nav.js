import React from "react";
import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";

const Nav = () => {
  let cartCount = "0";

  return (
    <div className="bg-white">
      <Navbar>
        <Title className="text-xl">react store</Title>
        <List className="text-sm">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">favorites</a>
          </li>
        </List>
        <Cart>
          <div className="relative">
            <MdOutlineShoppingCart className="cart-icon" />
            <Cartcount className="text-sm">{cartCount}</Cartcount>
          </div>
          <Cartprice className="text-sm">$0</Cartprice>
        </Cart>
      </Navbar>
    </div>
  );
};

const Navbar = styled.nav`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  letter-spacing: 3px;
  font-weight: 700;
`;

const List = styled.ul`
  width: 50%;
  max-width: 200px;
  min-width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Cart = styled.div`
  display: flex;
`;

const Cartprice = styled.p`
  padding-left: 25px;
`;

const Cartcount = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  text-align: center;
  height: 20px;
  width: 20px;
  border: 2px solid #111;
  border-radius: 50%;
  font-weight: 600;
  background-color: #fff;
`;

export default Nav;
