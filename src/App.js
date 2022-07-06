import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import UserControl from "./components/UserControl";
import ProductDisplay from "./components/ProductDisplay";
import productService from "./services/productService";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const getProducts = () => {
    productService.getProducts().then((products) => setAllProducts(products));
  };

  useEffect(getProducts, []);
  return (
    <ProjectContainer>
      <Nav />
      <UserControl />
      <ProductDisplay allProducts={allProducts} />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default App;
