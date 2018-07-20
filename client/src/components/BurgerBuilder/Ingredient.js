import React from "react";
import styled from "styled-components";
import { QuantityCounter } from "./../componentList";
const Ingredient = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3px 0;
  > * {
    border: 1px solid red;
  }
  > h4 {
    width: 30%;
    text-align: left;
    text-transform: capitalize;
  }
  > p {
    width: 10%;
    color: blue;
    text-align: center;
    display: inline-block;
  }
`;

export default props => {
  return (
    <Ingredient>
      <h4>Onion</h4>
      <p>$1</p>
      <QuantityCounter />
    </Ingredient>
  );
};
