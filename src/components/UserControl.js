import React from "react";
import styled from "styled-components";
import Categories from "./Categories";

const UserControl = () => {
  return (
    <UserControlContainer>
      <Categories />
    </UserControlContainer>
  );
};

const UserControlContainer = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 2rem;
`;

export default UserControl;
