import React from 'react';
import SiteThumbnails from './SiteThumbnails';
import SiteCover from './SiteCover';
import './styles.css';

// -------------------------------------

function SiteItem() {
  return (
    <article className="site site--feat">
    	<div className="thumb l-pr l-oh">
				<a className="l-flex" href="#">
					<SiteThumbnails />
				</a>
				<SiteCover />
			</div>
    </article>
  );
}

export default SiteItem;
