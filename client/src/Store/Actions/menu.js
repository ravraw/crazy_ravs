import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const menuLoadStart = () => {
  console.log("action-start");
  return {
    type: actionTypes.MENU_LOAD_START
  };
};

export const menuLoadSuccess = data => {
  // returns menu sections
  const menu = {};
  data.forEach(el => {
    if (!menu[el.menu_section]) {
      menu[el.menu_section] = [];
    } else {
      menu[el.menu_section].push(el);
    }
  });
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
