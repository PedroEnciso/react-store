import axios from "axios";
// production url
// const baseUrl = "https://fakestoreapi.com/products";
const baseUrl = "http://localhost:3001/products";

const getProducts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getProducts };
