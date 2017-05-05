import React from 'react';
import Btn from '../../Btn';
import SiteShare from '../SiteShare';
import './styles.css';

// -------------------------------------

function SiteCover() {
  return (
  	<div className="sitecover">
			<div className="sitecover__time">
				Posted on
				<time className="sitecover__time__timestamp">NOVEMBER 31 2016</time>
			</div>
			<Btn label="Details" to="#" iconId="plus" />
			<Btn label="Check it out" to="#" iconId="chain" />
			<SiteShare />
		</div>
  );
}

export default SiteCover;
