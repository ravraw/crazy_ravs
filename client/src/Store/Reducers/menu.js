import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  error: "",
  loading: "",
  menu: ""
};

const menuLoadStart = (state, action) => {
  console.log("reducer-start");
  return updateObject(state, { error: null, loading: true });
};

const menuLoadSuccess = (state, action) => {
  console.log("reducer-success");
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
