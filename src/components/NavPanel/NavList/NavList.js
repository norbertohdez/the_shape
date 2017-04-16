import React, { Component } from 'react';
import classNames from 'classnames';

import './NavList.css';

import navService from '../../../services/navService';

/* CORE -------------------------------------- */

class NavList extends Component {

  render() {

    let navList = (navService().NavList).map((item) => {
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

    return (
      <nav>
        <ul className="nav-list">
          {navList}
        </ul>
      </nav>
    )

  }

}

export default NavList;
