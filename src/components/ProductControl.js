import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import UserControl from "./UserControl";
import ProductDisplay from "./ProductDisplay";

// I'm adding this extra container around all components that show products and manipulate display products so
// that I am only making the fetch request once. Before, allProducts and displayedProducts were defined in App,
// so everytime the displaydProducts state changed, the app would re-run the fetch function

const ProductControl = ({ allProducts }) => {
  const [displayedProucts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts(allProducts);
  }, [allProducts]);

  return (
    <div>
      <Container>
        <Nav />
        <UserControl
          allProducts={allProducts}
          setDisplayedProducts={setDisplayedProducts}
          displayedProucts={displayedProucts}
        />
        <ProductDisplay allProducts={displayedProucts} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default ProductControl;
