import React from "react";
import styled from "styled-components";
import Categories from "./Categories";

const UserControl = () => {
  return (
    <UserControlContainer>
      <div className="flex align-center">
        <Categories />
        <div>filter</div>
      </div>
      <div>search</div>
    </UserControlContainer>
  );
};

const UserControlContainer = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default UserControl;
