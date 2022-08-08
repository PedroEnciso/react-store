import React from "react";
import styled from "styled-components";

const Banner = ({ title }) => {
  return (
    <div>
      <BannerContainer>{title}</BannerContainer>
    </div>
  );
};

const BannerContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default Banner;
