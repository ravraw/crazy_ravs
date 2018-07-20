import React from "react";
import styled from "styled-components";
import IngredientType from "./IngredientType";
import Ingredient from "./Ingredient";

const BurgerControls = styled.div`
  width: 60%;
  height: 100%;
  background: gray;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 auto; //grow shrink basis

  overflow: scroll;
`;

export default () => {
  return (
    <BurgerControls>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
      <IngredientType label="Burger Buns">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </IngredientType>
    </BurgerControls>
  );
};
