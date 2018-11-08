import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div style={{ height: '80%' }}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired,
};

export default toolbar;
