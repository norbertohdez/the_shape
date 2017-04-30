import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopMenuItem from './TopMenuItem/TopMenuItem';

import './TopMenu.css';

/* CORE -------------------------------------- */

class TopMenu extends Component {

  render() {
    return (
      <ul className="top-menu l-p--xs l-m0">
        <TopMenuItem action={this.props.toggleNav} iconId="hamburguer" label="Menu" />
        <TopMenuItem action={this.props.toggleSearchPanel} iconId="zoom" label="Search" />
      </ul>
    )
  }

}

TopMenu.propTypes = {
  toggleNav:       PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

export default TopMenu;
