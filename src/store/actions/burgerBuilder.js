import axios from "../../axios-orders";

import * as ACTIONS from "./actionTypes";
export const addIngredient = ingredientName => {
  return {
    type: ACTIONS.ADD_INGREDIENT,
    ingredientName
  };
};
export const removeIngredient = ingredientName => {
  return {
    type: ACTIONS.REMOVE_INGREDIENT,
    ingredientName
  };
};

export const setIngredients = ingredients => {
  return {
    type: ACTIONS.SET_INGREDIENTS,
    ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: ACTIONS.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-c781d.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
    dispatch(setIngredients());
  };
};
