import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

drawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default drawerToggle;
