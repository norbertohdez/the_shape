import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo/Logo';
import ApoloForm from './ApoloForm/ApoloForm';
import TopMenu from '../TopMenu/TopMenu';
import NavPanel from '../NavPanel/NavPanel';

/* CORE -------------------------------------- */

class Header extends Component {

  render() {
    return (
      <div>
        <header className="l-ra l-bb">
          <TopMenu
            toggleNav={this.props.toggleNav}
            toggleSearchPanel={this.props.toggleSearchPanel}
          />
          <Logo />
          <ApoloForm />
        </header>
        <NavPanel />
      </div>
    );
  }
}

Header.propTypes = {
  toggleNav:       PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

export default Header;
