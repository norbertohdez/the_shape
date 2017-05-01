//@TODO: Create component for forms and fields

import React from 'react';
import Btn from '../../Btn';
import SvgSprite from '../../SvgSprite';
import './styles.css';

// -------------------------------------

function ApoloForm() {
  
  return (
    <div className="apolo t-ac l-hm">
      <SvgSprite passClassName="apolo__svg" iconId="apolo" />
      <input
        type="text"
        className="form-field form-field--call-to-action"
        placeholder="Type your site's URL"
      />
      <Btn
        passClassName="l-mh-auto"
        size="callToAction"
        theme="mint"
        label="PUBLISH NOW"
        to="#"
      />
      <p className="apolo__price-line heading-lines l-mt2 l-mh4 l-mb0">
        for only 20 usd
      </p>
    </div>
  );
  
}

export default ApoloForm;
