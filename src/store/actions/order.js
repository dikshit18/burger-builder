import * as ACTIONS from "./actionTypes";
import axios from "../../axios-orders";

export const purhaseBurgerSuccess = (id, orderData) => {
  return {
    type: ACTIONS.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData
  };
};

export const purhaseBurgerFail = error => {
  return {
    type: ACTIONS.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: ACTIONS.PURCHASE_BURGER_START
  };
};

export const purhaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        dispatch(purhaseBurgerSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(purhaseBurgerFail(error));
      });
  };
};
