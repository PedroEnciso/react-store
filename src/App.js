import { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import UserControl from "./components/UserControl";
import ProductDisplay from "./components/ProductDisplay";
import productService from "./services/productService";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    productService.getProducts().then((products) => {
      setAllProducts(products);
    });
  };

  useEffect(getProducts, []);

  // run through filter to only display categories the user has chosen
  // runs if allProducts are changed/sorted, or if a filter is added/removed
  useEffect(() => {
    const array = filterProducts(allProducts, filters);
    setDisplayedProducts(array);
  }, [allProducts, filters]);

  // function the will take an array of categories and an array of products
  // return only the products in the category array
  const filterProducts = (array, categories) => {
    if (categories.length === 0) return array;

    const filtered = array.filter((product) =>
      categories.includes(product.category)
    );

    return filtered;
  };

  return (
    <ProjectContainer>
      <Nav cart={cart} setCart={setCart} />
      <Banner title="All products" />
      <UserControl
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        filters={filters}
        setFilters={setFilters}
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
