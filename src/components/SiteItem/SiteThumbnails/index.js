import React from 'react';
import thumbDesktop from '../../../img/thumb-desktop.jpg';
import thumbMobile from '../../../img/thumb-mobile.jpg';
import './styles.css';

// -------------------------------------

function SiteThumbnails() {
  return (
  	<div>
	    <div className="thumb__cell">
				<img className="thumb__img" src={thumbDesktop} alt="ADD DYNAMIC ALT HERE" />
			</div>
			<div className="thumb__cell thumb__cell--mobile">
				<img className="thumb__img" src={thumbMobile}  alt="ADD DYNAMIC ALT HERE" />
			</div>
		</div>
  );
}

export default SiteThumbnails;
