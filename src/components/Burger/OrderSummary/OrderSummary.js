import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {
    const {
      ingredients,
      price,
      purchaseCancelled,
      purchaseContinued,
    } = this.props;
    const ingredientSummary = Object.keys(ingredients)
      .map((igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey]}
          </li>
        );
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p><strong>Total Price: {price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={purchaseCancelled} btnType="Danger">CANCEL</Button>
        <Button clicked={purchaseContinued} btnType="Success">CONTINUE</Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};

export default OrderSummary;
