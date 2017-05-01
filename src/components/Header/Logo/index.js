import React from 'react';
import SvgSprite from '../../SvgSprite'
import './styles.css';

// -------------------------------------

function Logo() {

  return (
    <h1 className="logo">
      <a href="#">
        <span className="t-accessible">The Shape of Web Nowadays</span>
        <SvgSprite
          passClassName="logo__svg l-sm"
          iconId="logo-horizontal"
          viewBox="100 23"
        />
        <SvgSprite passClassName="logo__svg l-hm" iconId="logo" />
        <span role="presentation" className="logo__go-home l-hm">
          GO HOME
        </span>
      </a>
    </h1>
  );

}

export default Logo;
