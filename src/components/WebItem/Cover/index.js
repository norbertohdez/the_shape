import React from 'react';
import Btn from '../../Btn';
import Share from '../Share';
import './styles.css';

// -------------------------------------

function Cover() {
  return (
  	<div className="cover">
			<div className="cover__date">
				Posted on
				<time className="cover__date__timestamp">NOVEMBER 31 2016</time>
			</div>
			<Btn label="Details" to="#" iconId="plus" />
			<Btn label="Check it out" to="#" iconId="chain" />
			<Share />
		</div>
  );
}

export default Cover;
