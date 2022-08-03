import React from "react";
import styled from "styled-components";

const Sort = ({ allProducts, setDisplayedProducts }) => {
  // sort prices from low to high
  const priceLowToHigh = () => {
    let sorted = [];
    allProducts.forEach((product) => {
      // check if this is the first product, true: add immediately
      if (sorted.length === 0) {
        console.log("adding first product");
        sorted.push(product);
      } else {
        // products are in the array
        // loop through sorted and compare prices
        const length = sorted.length;
        for (let i = 0; i < length; i++) {
          if (parseFloat(product.price) < parseFloat(sorted[i].price)) {
            console.log(`adding product at index ${i}`);
            // current price is less than price at this index
            // place the current product at this index
            sorted.splice(i, 0, product);
            // end current iteration of the loop
            return false;
          } else if (i === sorted.length - 1) {
            console.log("adding product to the end of sort");
            // this position is the last element in the array
            // add prod to the end of the array
            sorted.push(product);
          }
        }
      }
    });
    // products have been sorted, set displayedProducts to the sorted array
    setDisplayedProducts(sorted);
  };

  return (
    <ButtonCntr>
      <SortButton onClick={priceLowToHigh}>Price &#8593;</SortButton>
      <SortButton>Price &#8595;</SortButton>
      <SortButton>Rating &#8593;</SortButton>
      <SortButton>Rating &#8595;</SortButton>
    </ButtonCntr>
  );
};

const ButtonCntr = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const SortButton = styled.button`
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 0.45rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export default Sort;
