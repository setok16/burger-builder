import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients) // Gives array of keys
    .map((igKey) => { // Create 2D array
      return [...Array(ingredients[igKey])].map((_, i) => {
        return (
          <BurgerIngredient key={igKey + i} type={igKey} />
        );
      });
    })
    .reduce((arr, element) => arr.concat(element), []); // Flatten array
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>Please start adding ingredients!</p>
    );
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default burger;
