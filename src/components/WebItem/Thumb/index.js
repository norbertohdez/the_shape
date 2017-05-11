import React from 'react';
import thumbDesktop from '../../../img/thumb-desktop.jpg';
import thumbMobile from '../../../img/thumb-mobile.jpg';
import './styles.css';

// -------------------------------------

function Thumb() {
  return (
  	<a className="l-flex" href="#">
	    <div className="webthumb__cell">
				<img className="webthumb__img" src={thumbDesktop} alt="ADD DYNAMIC ALT HERE" />
			</div>
			<div className="webthumb__cell webthumb__cell--mobile">
				<img className="webthumb__img" src={thumbMobile}  alt="ADD DYNAMIC ALT HERE" />
			</div>
		</a>
  );
}

export default Thumb;
