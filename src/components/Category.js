import React from "react";

const Category = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(name)}>{name}</button>
    </div>
  );
};

export default Category;
