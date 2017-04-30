import React, { Component } from 'react';

import './NavSocialLinks.css';

import SvgSprite from '../../SvgSprite/SvgSprite';

import navService from '../../../services/navService';

/* CORE -------------------------------------- */

class NavSocialLinks extends Component {

  /**
   * Takes array and iterates to render inner list markup
   * @param   {object[]} items - Links to render
   * @returns {object} JSX markup
   */
  getSocialLinks(items) {
    return items.map((item) => {
      return (
        <li key={items.indexOf(item).toString()} className="l-m1">
          <a href={item.link} target="_blank" className="nav-social__link">
            <span className="t-accessible">{item.label}</span>
            <SvgSprite svgClasses="fill-blue" iconId={item.iconId} />
          </a>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="nav-social">
        <p className="t-up t-scale-75d t-c-gray l-p1 l-m0">Find us in social media</p>
        <ul className="l-flex l-m0">
          { this.getSocialLinks(navService().NavSocialLinks) }
        </ul>
      </div>
    )
  }
}

export default NavSocialLinks;
