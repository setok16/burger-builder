import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
  const { link, active, children } = props;
  return (
    <li className={classes.NavigationItem}>
      <a
        href={link}
        className={active ? classes.active : null}
      >{children}
      </a>
    </li>
  );
};

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default navigationItem;
