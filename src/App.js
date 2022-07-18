import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import UserControl from "./components/UserControl";
import ProductDisplay from "./components/ProductDisplay";
import productService from "./services/productService";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const getProducts = () => {
    productService.getProducts().then((products) => {
      setAllProducts(products);
    });
  };

  useEffect(getProducts, []);

  useEffect(() => {
    setDisplayedProducts(allProducts);
  }, [allProducts]);

  return (
    <ProjectContainer>
      <Nav />
      <UserControl
        allProducts={allProducts}
        setDisplayedProducts={setDisplayedProducts}
        displayedProucts={displayedProducts}
      />
      <ProductDisplay allProducts={displayedProducts} />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default App;
