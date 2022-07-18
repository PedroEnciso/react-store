import React, { useEffect } from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Sort from "./Sort";

const UserControl = ({
  allProducts,
  setDisplayedProducts,
  displayedProucts,
}) => {
  return (
    <UserControlContainer>
      <div className="flex width100 justify-center">
        <Categories
          allProducts={allProducts}
          setDisplayedProducts={setDisplayedProducts}
        />
      </div>
      <Sort />
    </UserControlContainer>
  );
};

const UserControlContainer = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default UserControl;
