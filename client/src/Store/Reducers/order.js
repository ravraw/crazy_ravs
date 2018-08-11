import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  order: {},
  error: "",
  complete: true
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return updateObject(state, {
        order: { ...state.order, [action.payload.id]: [action.payload] }
      });
    default:
      return state;
  }
};
