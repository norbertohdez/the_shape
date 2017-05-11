import React from 'react';
import Thumb from './Thumb';
import Cover from './Cover';
import Info from './Info';
import './styles.css';

// -------------------------------------

function WebItem() {
  return (
    <article className="webitem webitem--feat">
    	<div className="webitem__preview l-pr l-oh">
				<Thumb />
				<Cover />
			</div>
			<Info />
    </article>
  );
}

export default WebItem;
