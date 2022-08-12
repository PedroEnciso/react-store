import React from "react";
import styled from "styled-components";

const Message = ({ message, theme }) => {
  return (
    <MessageContainer className={theme}>
      <p>{message}</p>
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  position: sticky;
  top: 2.5rem;
  left: 50%;
  width: 75%;
  max-width: 400px;
  transform: translateX(-50%);
  padding: 1rem 2.5rem;
  border-radius: 10px;
  text-align: center;
`;

export default Message;
