import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Overlay from '../Overlay/Overlay';
import SearchPanel from '../SearchPanel/SearchPanel';


/* CORE -------------------------------------- */

class Page extends Component {

  render() {
    return (
      <div>
        <div className="column-action">
         <Header toggleNav={this.props.toggleNav} toggleSearchPanel={this.props.toggleSearchPanel} />
        </div>
        <div className="column-content">
          <SearchPanel toggleSearchPanel={this.props.toggleSearchPanel} />
        </div>
        <Overlay />
      </div>
    );
  }

}

Page.propTypes = {
  className:       PropTypes.string,
  toggleNav:       PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

export default Page;
