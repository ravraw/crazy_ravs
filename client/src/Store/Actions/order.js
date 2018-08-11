import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const orderStart = order => {
  return {
    type: actionTypes.ORDER_START,
    payload: order
  };
};

export const orderSuccess = res => {
  return {
    type: actionTypes.ORDER_SUCCESS,
    payload: res
  };
};

export const orderFail = error => {
  console.log("action-fail");
  return {
    type: actionTypes.ORDER_FAIL,
    payload: error
  };
};

export const placeOrder = () => {
  return dispatch => {
    dispatch(orderStart());
    axios
      .post("/api/order")
      .then(res => {
        dispatch(orderSuccess(res.data));
      })
      .catch(err => {
        dispatch(orderFail(err));
      });
  };
};
