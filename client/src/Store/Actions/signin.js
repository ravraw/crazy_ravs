import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const signinStart = () => {
  return {
    type: actionTypes.SIGNIN_START
  };
};

export const signinSuccess = data => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    payload: data
  };
};

export const signinFail = error => {
  return {
    type: actionTypes.SIGNIN_FAIL,
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

export const googleStart = () => {
  return {
    type: actionTypes.GOOGLE_AUTH_START
  };
};

export const googleSuccess = data => {
  return {
    type: actionTypes.GOOGLE_AUTH_SUCCESS,
    payload: data
  };
};

export const googleFail = error => {
  return {
    type: actionTypes.GOOGLE_AUTH_FAIL,
    error: error
  };
};

export const signin = (email, password) => {
  return dispatch => {
    dispatch(signinStart());
    const data = { email, password };
    axios
      .post("/api/users/signin", data)
      .then(res => {
        console.log(res);
        dispatch(signinSuccess(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(signinFail(err));
      });
  };
};

export const signup = (email, password, username) => {
  return dispatch => {
    dispatch(signupStart());
    const data = { email, password, username };
    axios
      .post("/api/users/signup", data)
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

export const googleAuth = () => {
  return dispatch => {
    dispatch(googleStart());
    axios
      .get("/auth/google/")
      .then(res => {
        console.log(res);
        dispatch(googleSuccess(res));
      })
      .catch(err => {
        console.log(err);
        dispatch(googleFail(err));
      });
  };
};
