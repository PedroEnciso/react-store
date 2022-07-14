import React, { useState } from "react";
import Category from "./Category";

const Categories = ({ allProducts, setDisplayedProducts }) => {
  const [categoryFilter, setCategoryFilter] = useState([]);

  // takes an array, removes all duplicates and returns an array with only unique values
  const filterArray = (array) => {
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
  categories = filterArray(categories);

  // add a category to the filtered category list
  const addCategoryFilter = (name) => {
    setCategoryFilter(categoryFilter.concat(name));
  };

  return (
    <div>
      {categories.map((category) => (
        <Category name={category} onClick={addCategoryFilter} key={category} />
      ))}
    </div>
  );
};

export default Categories;
