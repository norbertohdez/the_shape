import React from 'react';
import NavList from './NavList';
import NavSocialLinks from './NavSocialLinks';
import './styles.css';

// -------------------------------------

function NavPanel() {

  return (
    <div className="nav-panel">
      <NavList />
      <NavSocialLinks />
    </div>
  );

}

export default NavPanel;
