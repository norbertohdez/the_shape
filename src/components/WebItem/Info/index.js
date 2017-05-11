import React from 'react';
//import PropTypes from 'prop-types';
import Btn from '../../Btn';
import authorThumb from '../../../img/thumb-author.jpg';
//import Rate from '../../Rate';
import './styles.css';

// -------------------------------------

function SiteInfo() {
  return (
    <div className="siteinfo l-mt1">
      <div className="l-flex l-bb l-bb-sep">
        <div className="l-bb l-w40px l-br-sep">
          <Btn 
          	label="Go to Website"
          	to="#"
          	iconId="chain"
          	size="full"
          	theme="tertiary"
          	onlyIcon={true}
          />
        </div>
        <div className="l-bb l-w100 l-bl-sep">
          <Btn
          	label="The North Face Website"
          	to="#"
          	passClassName="btn--al"
          	size="full"
          	theme="secondary"
          />
        </div>
      </div>

      <div className="l-flex l-bb l-bt-sep">
        <div className="l-bb l-w100 l-p1 l-br-sep">
          <img src={authorThumb} className="siteinfo__author-thumb" alt="DYNAMIC ALT" />
          <a href className="link">Author's Name</a>
          <Btn
          	to="#"
          	label="All items"
          	passClassName="l-ml1"
          	size="mini"
          	theme="tertiary"
          	iconId="chain"
          />
          <span className="l-va-m flag-icon flag-icon-gr l-ml1"></span>
        </div>
        <div className="l-bb l-w40px l-bl-sep">
          
        </div>
      </div>
    </div>
  );
}

export default SiteInfo;
