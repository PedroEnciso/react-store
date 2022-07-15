import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductControl from "./components/ProductControl";
import productService from "./services/productService";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = () => {
    productService.getProducts().then((products) => {
      setAllProducts(products);
    });
  };

  useEffect(getProducts, []);

  return (
    <ProjectContainer>
      <ProductControl allProducts={allProducts} />
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default App;
