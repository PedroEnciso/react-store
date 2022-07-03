import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div className="bg-light">
      <Navbar>
        <Title>react store</Title>
        <List>
          <li>home</li>
          <li>favorites</li>
        </List>
        <Cart>
          <p>cart</p>
          <Cartprice>$0</Cartprice>
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
  font-size: 1.75rem;
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

export default Nav;
