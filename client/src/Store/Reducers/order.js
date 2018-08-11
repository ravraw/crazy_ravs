import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  order: [],
  error: "",
  complete: true
};

const orderStart = (state, action) => {
  return updateObject(state, { error: null, complete: false });
};

const orderSuccess = (state, action) => {
  return updateObject(state, {
    menu: action.payload,
    error: null,
    loading: false
  });
};

const menuLoadFail = (state, action) => {
  console.log("fail");
  return updateObject(state, {
    menu: "",
    error: action.payload,
    loading: false
  });
};

export const menuLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_LOAD_START:
      return menuLoadStart(state, action);
    case actionTypes.MENU_LOAD_SUCCESS:
      return menuLoadSuccess(state, action);
    case actionTypes.MENU_LOAD_FAIL:
      return menuLoadFail(state, action);
    default:
      return state;
  }
};
