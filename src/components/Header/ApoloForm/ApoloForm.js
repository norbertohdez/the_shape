import React, { Component } from 'react';

import './ApoloForm.css';

import Btn from '../../Btn/Btn';
import SvgSprite from '../../SvgSprite/SvgSprite';


/* CORE -------------------------------------- */
//@TODO: Create component for forms and fields

class ApoloForm extends Component {

  render() {
    return (
      <div className="apolo t-ac l-hm">
        <SvgSprite svgClasses="apolo__svg" iconId="apolo" />
        <input
          type="text" className="form-field form-field--call-to-action"
          placeholder="Type your site's URL"
        />
        <Btn className="l-mh-auto" size="callToAction" theme="mint"
          label="PUBLISH NOW" href="#"
        />
        <p className="apolo__price-line heading-lines l-mt2 l-mh4 l-mb0">for only 20 usd</p>
      </div>
    );
  }

}

export default ApoloForm;
