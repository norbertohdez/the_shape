import React, {Component} from 'react';
import classNames from 'classnames';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageRegular from '../Pages/Templates/PageRegular';
import Home from '../Pages/Content/Home';
import About from '../Pages/Content/About';

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
      'open-nav': this.state.openNavPanel,
      'open-search': this.state.openSearchBar,
      'touch': isTouch,
      'no-touch': !isTouch
    });

    return (
      <div className={openClasses}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
