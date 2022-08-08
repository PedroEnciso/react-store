import React from "react";
import styled from "styled-components";

const Sort = ({ allProducts, setAllProducts }) => {
  // sort prices from low to high
  const priceLowToHigh = () => {
    const sorted = sort(allProducts, "price", true);
    setAllProducts(sorted);
  };

  const priceHighToLow = () => {
    const sorted = sort(allProducts, "price", false);
    setAllProducts(sorted);
  };

  const sortDefault = () => {
    const sorted = sort(allProducts, "id", true);
    setAllProducts(sorted);
  };

  // sorting function using merge sort algorithm
  // sorts products in ascending order by trait provided in param
  const sort = (array, trait, order) => {
    if (array.length === 1) return array;

    const half = Math.floor(array.length / 2);
    let arr1 = array.slice(0, half);
    let arr2 = array.slice(half);

    arr1 = sort(arr1, trait, order);
    arr2 = sort(arr2, trait, order);

    let ind1 = 0;
    let ind2 = 0;
    let sorted = [];

    for (let i = 0; i < arr1.length + arr2.length; i++) {
      if (!arr1[ind1]) {
        sorted.push(arr2[ind2]);
        ind2++;
      } else if (!arr2[ind2]) {
        sorted.push(arr1[ind1]);
        ind1++;
      } else if (
        parseFloat(arr2[ind2][trait]) > parseFloat(arr1[ind1][trait])
      ) {
        // check if order is ascending or descending
        if (order) {
          sorted.push(arr1[ind1]);
          ind1++;
        } else {
          sorted.push(arr2[ind2]);
          ind2++;
        }
      } else {
        // check if order is ascending or descending
        // do the opposite as above
        if (order) {
          sorted.push(arr2[ind2]);
          ind2++;
        } else {
          sorted.push(arr1[ind1]);
          ind1++;
        }
      }
    }

    return sorted;
  };

  return (
    <ButtonCntr>
      <SortButton onClick={sortDefault}>Default</SortButton>
      <SortButton onClick={priceLowToHigh}>Price &#8593;</SortButton>
      <SortButton onClick={priceHighToLow}>Price &#8595;</SortButton>
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
