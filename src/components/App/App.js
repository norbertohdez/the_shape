import React, { Component } from 'react';
import classNames from 'classnames';

import Page from '../Page/Page';

/* CORE -------------------------------------- */

class App extends Component {

  constructor() {
    super();
    this.state = {
      openNavPanel: false,
      openSearchBar: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleSearchPanel = this.toggleSearchPanel.bind(this);
  }

  /**
   * Toggles state for tracking when nav panel opens
   */
  toggleNav() {
    this.setState({
      openNavPanel: !this.state.openNavPanel
    })
  }

  /**
   * Toggles state for tracking when nav search opens
   */
  toggleSearchPanel() {
    this.setState({
      openSearchBar: !this.state.openSearchBar
    })
  }

  render() {
    let isTouch = 'ontouchstart' in document.documentElement;
    let openClasses = classNames({
      'open-nav': this.state.openNavPanel,
      'open-search': this.state.openSearchBar,
      'touch': isTouch,
      'no-touch': !isTouch
    });

    return (
      <div className={openClasses}>
        <Page toggleNav={this.toggleNav} toggleSearchPanel={this.toggleSearchPanel} />
      </div>
  );
  }

}

export default App;
