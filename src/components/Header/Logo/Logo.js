import React, { Component } from 'react';

import './Logo.css';

import SvgSprite from '../../SvgSprite/SvgSprite'

/* CORE -------------------------------------- */

class Logo extends Component {

  render() {
    return (
      <h1 className="logo">
        <a href="#">
          <span className="t-accessible">The Shape of Web Nowadays</span>
          <SvgSprite svgClasses="logo__svg l-sm" iconId="logo-horizontal" viewBox="100 23" />
          <SvgSprite svgClasses="logo__svg l-hm" iconId="logo" />
          <span role="presentation" className="logo__go-home l-hm">GO HOME</span>
        </a>
      </h1>
    );
  }

}

export default Logo;
