import { useEffect } from "react";
import Nav from "./components/Nav";
import UserControl from "./components/UserControl";
import productService from "./services/productService";

function App() {
  const getProducts = () => {
    const products = productService.getProducts();
  };

  useEffect(getProducts, []);
  return (
    <div>
      <Nav />
      <UserControl />
    </div>
  );
}

export default App;
