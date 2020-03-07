import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { object } from "prop-types";
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log(igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .flat();
  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients !</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
