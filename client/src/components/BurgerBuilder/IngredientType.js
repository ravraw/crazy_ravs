import React from "react";
import styled from "styled-components";

const IngredientType = styled.div`
  width: 48%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  padding: 20px;
  border: 1px solid red;
  flex: 1 1 auto; //grow shrink basis
  > h3 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;

export default props => {
  return (
    <IngredientType>
      <h3>{props.label}</h3>
      {props.children}
    </IngredientType>
  );
};
