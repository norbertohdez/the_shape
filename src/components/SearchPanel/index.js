import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import SearchSuggestions from './SearchSuggestions';
import './styles.css';

// -------------------------------------

const propTypes = {
  toggleSearchPanel: PropTypes.func
};

const defaultProps = {
  toggleSearchPanel: null
};

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

SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;

export default SearchPanel;
