import React, { Component } from 'react';
import classNames from 'classnames';

import './NavList.css';

import navService from '../../../services/navService';

/* CORE -------------------------------------- */

class NavList extends Component {

  /**
   * Takes array and iterates to render inner list markup
   * @param   {object[]} items - Links to render
   * @returns {object} JSX markup
   */
  getNavList(items) {
    return items.map((item) => {
      let cssClasses = classNames({
        'nav__link': true,
        'nav__link--active': item.isActive
      });
      return (
        <li key={item.id.toString()} className="nav-list__item">
          <a href={item.link} className={cssClasses}>
            {item.label}
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <nav>
        <ul className="nav-list">
          {this.getNavList(navService().NavList)}
        </ul>
      </nav>
    )
  }

}

export default NavList;
