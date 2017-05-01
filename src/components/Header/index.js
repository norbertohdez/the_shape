import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import ApoloForm from './ApoloForm';
import TopMenu from '../TopMenu';
import NavPanel from '../NavPanel';

// -------------------------------------

const propTypes = {
  toggleNav: PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

const defaultProps = {
  toggleNav: null,
  toggleSearchPanel: null
};

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

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
