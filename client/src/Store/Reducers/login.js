import * as actionTypes from "../Actions/actionTypes";
import { updateObject } from "./utility";
// import { login } from "../Actions";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const loginStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const loginSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const loginFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const signupStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  });
};

const signupFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_START:
      return signupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL:
      return signupFail(state, action);
    default:
      return state;
  }
};
