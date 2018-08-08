import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const menuLoadStart = () => {
  console.log("action-start");
  return {
    type: actionTypes.MENU_LOAD_START
  };
};

export const menuLoadSuccess = menu => {
  console.log("action-succes");
  return {
    type: actionTypes.MENU_LOAD_SUCCESS,
    payload: menu
  };
};

export const menuLoadFail = error => {
  console.log("action-fail");
  return {
    type: actionTypes.MENU_LOAD_FAIL,
    payload: error
  };
};

export const loadMenu = () => {
  return dispatch => {
    dispatch(menuLoadStart());
    axios
      .get("/api/menu")
      .then(res => {
        dispatch(menuLoadSuccess(res.data));
      })
      .catch(err => {
        dispatch(menuLoadFail(err));
      });
  };
};
