import React from 'react';
import Btn from '../../Btn';
import authorThumb from '../../../img/thumb-author.jpg';
import Rate from '../../Rate';
import './styles.css';

// -------------------------------------

function SiteInfo() {
  return (
    <div className="siteinfo l-mt1">
      <div className="l-flex l-bb l-bb-sep">
        <div className="siteinfo__chain-link l-bb l-br-sep">
          <Btn 
            label="Go to Website"
            to="#"
            iconId="chain"
            size="full"
            theme="mint"
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
          <a href="#" className="link-line">
            <img
              src={authorThumb}
              className="siteinfo__author-thumb"
              alt="DYNAMIC ALT"
            />
            Author name here
          </a>
          <span className="l-va-m flag-icon flag-icon-gr l-ml1"></span>
          <Btn
            to="#"
            label="Portfolio"
            passClassName="l-ml1"
            size="mini"
            theme="secondary"
            iconId="chain"
          />
        </div>
        <div className="l-bb l-bl-sep">
          <Rate />
        </div>
      </div>
    </div>
  );
}

export default SiteInfo;
