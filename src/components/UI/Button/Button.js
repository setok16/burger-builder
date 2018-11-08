import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => {
  const { clicked, btnType, children } = props;
  return (
    <button
      className={[classes.Button, classes[btnType]].join(' ')}
      onClick={clicked}
    >{children}
    </button>
  );
};

button.propTypes = {
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default button;
