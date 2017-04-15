import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';


/* CORE -------------------------------------- */

class Page extends Component {

  render() {
    return (
      <div>
        <div className="column-action">
         <Header toggleNav={this.props.toggleNav} toggleSearchBar={this.props.toggleSearchBar} />
        </div>
        <div className="column-content">
          <h1>This is the Home Page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }

}

Page.propTypes = {
  className:       PropTypes.string,
  toggleNav:       PropTypes.func,
  toggleSearchBar: PropTypes.func
};

export default Page;
