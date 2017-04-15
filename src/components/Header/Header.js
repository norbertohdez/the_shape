import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo/Logo'
import ApoloForm from './ApoloForm/ApoloForm'

/* CORE -------------------------------------- */

class Header extends Component {

  render() {
    return (
      <div>
        <header className="l-ra l-bb" onClick={this.props.toggleNav}>
          {/*<TopMenu />*/}
          <Logo />
          <ApoloForm />
        </header>
        {/*<NavPanel />*/}
      </div>
    );
  }

}

Header.propTypes = {
  toggleNav: PropTypes.func
};

export default Header;
