import React from "react";
import styled from "styled-components";
const BurgerDisplay = styled.div`
  width: 40%;
  height: 100%;
  background: yellow;
  flex: 0 1 auto; //grow shrink basis
`;

export default () => {
  return (
    <BurgerDisplay>
      <h1>Burger display</h1>
    </BurgerDisplay>
  );
};
