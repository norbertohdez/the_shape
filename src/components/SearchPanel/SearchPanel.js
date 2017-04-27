import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchPanel.css';

import SearchBar from './SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';

/* CORE -------------------------------------- */

class SearchPanel extends Component {

  render() {
    return (
      <div className="search-panel">
        <SearchBar toggleSearchPanel={this.props.toggleSearchPanel} />
        <SearchSuggestions />
      </div>
    );
  }
}

SearchPanel.propTypes = {
  toggleSearchPanel: PropTypes.func
};

export default SearchPanel;
