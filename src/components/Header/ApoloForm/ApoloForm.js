import React, { Component } from 'react';

import './ApoloForm.css';

import Btn from '../../Btn/Btn';
import SvgSprite from '../../SvgSprite/SvgSprite';

import getCopy from '../../../services/copyService';

/* CORE -------------------------------------- */

class ApoloForm extends Component {

  render() {

    let copy = getCopy();
    return (
      <div className="t-ac l-hm">
        <SvgSprite svgClasses="apolo__svg" iconId="apolo" />
        <input
          type="text" className="form-field form-field--call-to-action"
          placeholder={ copy.apoloInputPlaceholder }
        />
        <Btn className="l-mh-auto" size="callToAction" theme="mint"
          label={ copy.apoloBtnLabel } href="#"
        />
        <p className="apolo__price-line heading-lines l-mt2 l-mh4 l-mb0">
          { copy.apoloPrice }
        </p>
      </div>
    );
  }

}

export default ApoloForm;
