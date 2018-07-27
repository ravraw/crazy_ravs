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
export const signupStart = () => {
  return {
    type: actionTypes.SIGNUP_START
  };
};

export const signupSuccess = data => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: data
  };
};

export const signupFail = error => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    error: error
  };
};

export const login = (email, password, username) => {
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

export const signup = (email, password, username) => {
  return dispatch => {
    dispatch(signupStart());
    const data = { email, password, username };
    axios
      .post("/signup", data)
      .then(res => {
        console.log(res);
        dispatch(signupSuccess(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(signupFail(err));
      });
  };
};
