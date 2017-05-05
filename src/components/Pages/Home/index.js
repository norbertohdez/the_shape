import React from 'react';
import SitesList from '../../SitesList';

// -------------------------------------

function Home() {
  return (
    <section>
      <h2 className="heading-block">Sites Featured Today</h2>
      <SitesList />
    </section>
  );
}

export default Home;
