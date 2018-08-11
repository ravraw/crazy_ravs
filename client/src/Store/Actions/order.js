import * as actionTypes from "../Actions/actionTypes";
import axios from "axios";

export const addItem = item => {
  console.log("addItem");
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};
