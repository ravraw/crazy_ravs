import React from "react";
import styled from "styled-components";
import { Button } from "../componentList";

const BuilderTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3px 20px;
`;

export default () => {
  return (
    <BuilderTotal>
      <span>
        <h1>Total Price : $12</h1>
      </span>
      <Button name="----Add to Order-----" />
    </BuilderTotal>
  );
};
