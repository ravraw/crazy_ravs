import React from "react";
import styled from "styled-components";
import { BurgerControls, BurgerDisplay, BuilderTotal } from "../componentList";

const BurgerBuilder = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  flex-wrap: wrap;
`;

export default () => {
  return (
    <BurgerBuilder>
      <BuilderTotal />
      <BurgerControls />
      <BurgerDisplay />
    </BurgerBuilder>
  );
};
