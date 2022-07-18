import React from "react";

const Sort = () => {
  return (
    <div>
      <label htmlFor="sort">sort by: </label>
      <select name="sort" id="sort">
        <option value="default">default</option>
        <option value="lowToHigh">$ low to high</option>
        <option value="highToLow">$ high to low</option>
      </select>
    </div>
  );
};

export default Sort;
