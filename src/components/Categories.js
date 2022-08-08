import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "./Category";

const Categories = ({ allProducts, filters, setFilters }) => {
  // const [categoryFilter, setCategoryFilter] = useState([]);

  // const filterCategories = () => {
  //   const filtered = allProducts.filter((product) => {
  //     if (categoryFilter.length === 0) {
  //       // no categories to filter, return every product
  //       return true;
  //     } else if (categoryFilter.includes(product.category)) {
  //       // the product's category is in the list, return the product
  //       return true;
  //     } else {
  //       // product's category is not in the list, do not return
  //       return false;
  //     }
  //   });
  //   setDisplayedProducts(filtered);
  // };

  // useEffect(filterCategories, [categoryFilter]);

  // takes an array, removes all duplicates and returns an array with only unique values
  const removeDuplicates = (array) => {
    const unique = array.filter((item, index) => {
      if (array.indexOf(item) === index) {
        return true;
      } else {
        return false;
      }
    });
    return unique;
  };

  // get a list of all categories from the products
  let categories = allProducts.map((product) => product.category);
  categories = removeDuplicates(categories);

  // add a category to the category list
  const addCategoryFilter = (name) => {
    setFilters(filters.concat(name));
  };

  //remove a category from the category list
  const removeCategoryFilter = (name) => {
    const filtered = filters.filter((cat) => (cat === name ? false : true));
    setFilters(filtered);
  };

  // chooses whether to add a category or delete a category from the category list
  const handleNewCategory = (name) => {
    if (filters.includes(name)) {
      // category is already in the list; remove it
      removeCategoryFilter(name);
    } else {
      // category is not in the list; add it
      addCategoryFilter(name);
    }
  };

  return (
    <CategoryContainer>
      {categories.map((category) => (
        <Category
          style={filters.includes(category) ? "active" : "inactive"}
          name={category}
          onClick={handleNewCategory}
          key={category}
        />
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  width: fit-content;
  display: flex;
`;

export default Categories;
