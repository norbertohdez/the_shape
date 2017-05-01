import React, { Component } from 'react';
import classNames from 'classnames';
import navService from '../../../services/navService';
import './styles.css';

// -------------------------------------

class NavList extends Component {

  /**
   * Takes array and iterates to render inner list markup
   * @param   {object[]} items - Links to render
   * @returns {object} JSX markup
   */
  generateNavList(items) {
    return items.map((item) => {
      const cssClasses = classNames({
        'nav__link': true,
        'nav__link--active': item.isActive
      });
      return (
        <li key={items.indexOf(item).toString()} className="nav-list__item">
          <a href={item.link} className={cssClasses}>
            {item.label}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav>
        <ul className="nav-list">
          {this.generateNavList(navService().NavList)}
        </ul>
      </nav>
    );
  }

}

export default NavList;
