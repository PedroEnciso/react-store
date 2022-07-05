import axios from "axios";
// production url
// const baseUrl = "https://fakestoreapi.com/products";
const baseUrl = "http://localhost:3001/products";

const getProducts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default { getProducts };
