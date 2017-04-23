import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TopMenuItem.css';

/* CORE -------------------------------------- */

class TopMenuItem extends Component {

  /**
   * Returns JSX for Hamburguer icon
   */
  getHamburguerIcon() {
    return (
      <span className="i-nav">
        <span className="i-nav__str i-nav__str--1"></span>
        <span className="i-nav__str i-nav__str--2"></span>
        <span className="i-nav__str i-nav__str--3"></span>
      </span>
    );
  }

  /**
   * Returns JSX for Zoom icon
   */
  getZoomIcon() {
    return (
      <span className="i-nav">
        <span className="i-nav__zoom i-nav__zoom--circle"></span>
        <span className="i-nav__zoom i-nav__zoom--handle"></span>
      </span>
    );
  }

  render() {
    return (
      <li className="top-menu__li">
        <button className="top-menu__btn" onClick={this.props.action} title={this.props.label}>
          <span className="t-accessible">{this.props.label}</span>
          {
            this.props.iconId === 'hamburguer' ?
            this.getHamburguerIcon() :
            this.getZoomIcon()
          }
        </button>
      </li>
    )
  }

}

TopMenuItem.propTypes = {
  action: PropTypes.func,
  iconId: PropTypes.oneOf(['hamburguer', 'zoom']).isRequired,
  label:  PropTypes.string.isRequired
};

export default TopMenuItem;
