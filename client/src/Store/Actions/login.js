import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = data => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    const data = { email, password };
    axios
      .post("/signin", data)
      .then(res => {
        console.log(res);
        dispatch(loginSuccess(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(loginFail(err));
      });
  };
};
