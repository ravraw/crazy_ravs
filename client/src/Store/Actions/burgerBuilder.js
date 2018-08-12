import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const addIngredient = item => {
  console.log("addItem");
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: item
  };
};
