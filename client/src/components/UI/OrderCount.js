import React from "react";
import styled from "styled-components";
const Count = styled.div`
  width: 25px;
  height: 25px;
  background: red;
  opacity: 1;
  color: white;
  border: 1px solid red;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 95px;
  display: flex;

  > span {
    margin: auto;
    font-size: 0.8rem;
    font-family: sans-serif;
  }
`;

export default props => {
  return (
    <Count>
      <span>{props.children}</span>
    </Count>
  );
};
