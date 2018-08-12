import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  meat_topping: [],
  pickle: [],
  salad: [],
  cheese: [],
  patty: [],
  sauce: [],
  bun: [],
  quantity: 1,
  error: "",
  complete: false
};

export const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        [action.payload.menu_section]: [
          ...state[action.payload.menu_section],
          action.payload
        ]
      };
    default:
      return state;
  }
};
