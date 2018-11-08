import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  const {
    price,
    ingredientAdded,
    ingredientRemoved,
    disabled,
    purchasable,
    ordered,
  } = props;
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>${price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      > ORDER NOW
      </button>
    </div>
  );
};

buildControls.propTypes = {
  price: PropTypes.number.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.array.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired,
};

export default buildControls;
