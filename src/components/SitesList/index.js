import React from 'react';
import SiteItem from '../SiteItem';

// -------------------------------------

function SitesList() {
  return (
    <div className="siteslist l-flex l-flex-wrap bg-gray">
      <SiteItem />
      <SiteItem />
    </div>
  );
}

export default SitesList;
