import React, {Component} from 'react';
import classNames from 'classnames';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header';
import Overlay from '../Overlay';
import SearchPanel from '../SearchPanel';
import Home from '../Pages/Home';
import About from '../Pages/About';

// -------------------------------------


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
    const isTouch = 'ontouchstart' in document.documentElement;
    const openClasses = classNames({
      'open-nav':    this.state.openNavPanel,
      'open-search': this.state.openSearchBar,
      'touch':       isTouch,
      'no-touch':    !isTouch
    });

    return (
      <div className={openClasses}>
        <div className="column-action">
          <Header
            toggleNav={this.toggleNav}
            toggleSearchPanel={this.toggleSearchPanel}
          />
        </div>
        <div className="column-content">
          <SearchPanel toggleSearchPanel={this.toggleSearchPanel} />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </div>
        <Overlay />
      </div>
    );
  }

}

export default App;
