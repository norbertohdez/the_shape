import React, { Component } from 'react';

import './NavPanel.css';

import NavList from './NavList/NavList';
import NavSocialLinks from './NavSocialLinks/NavSocialLinks';

/* CORE -------------------------------------- */

class NavPanel extends Component {

  render() {
    return (
      <div className="nav-panel">
        <NavList />
        <NavSocialLinks />
      </div>
    );
  }

}

export default NavPanel;
