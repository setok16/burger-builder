import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
