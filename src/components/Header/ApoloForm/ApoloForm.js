import React, { Component } from 'react';

import './ApoloForm.css';

import Btn from '../../Btn/Btn';
import SvgSprite from '../../SvgSprite/SvgSprite';

import copyService from '../../../services/copyService';

/* CORE -------------------------------------- */
//@TODO: Create component for forms and fields

class ApoloForm extends Component {

  render() {

    let copy = copyService().ApoloForm;
    return (
      <div className="t-ac l-hm">
        <SvgSprite svgClasses="apolo__svg" iconId="apolo" />
        <input
          type="text" className="form-field form-field--call-to-action"
          placeholder={ copy.INPUT_PLACEHOLDER }
        />
        <Btn className="l-mh-auto" size="callToAction" theme="mint"
          label={ copy.BTN_LABEL } href="#"
        />
        <p className="apolo__price-line heading-lines l-mt2 l-mh4 l-mb0">
          { copy.PRICE_TEXT }
        </p>
      </div>
    );
  }

}

export default ApoloForm;
