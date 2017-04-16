import React, { Component } from 'react';

import './NavSocialLinks.css';

import SvgSprite from '../../SvgSprite/SvgSprite';

import navService from '../../../services/navService';
import copyService from '../../../services/copyService';

/* CORE -------------------------------------- */

class NavSocialLinks extends Component {

  render() {

    let socialLinks = (navService().NavSocialLinks).map((item) => {
      return (
        <li key={item.id.toString()} className="l-m1">
          <a href={item.link} target="_blank" className="nav-social__link">
            <span className="t-accessible">{item.label}</span>
            <SvgSprite svgClasses="fill-blue" iconId={item.iconId} />
          </a>
        </li>
      )
    });

    return (
      <div className="nav-social">
        <p className="t-up t-scale-75d t-c-gray l-p1 l-m0">
          { copyService().NavPanel.SOCIAL_LINKS_TITLE }
        </p>
        <ul className="l-flex l-m0">
          { socialLinks }
        </ul>
      </div>
    );
  }

}

export default NavSocialLinks;
