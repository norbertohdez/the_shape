import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgSprite from '../../SvgSprite';
import './styles.css';

// -------------------------------------

const propTypes = {
  toggleSearchPanel: PropTypes.func
};

const defaultProps = {
  toggleSearchPanel: null
};

class SearchBar extends Component {

  render() {
    return (
      <form action="#" className="search-bar">
        <button onClick={this.props.toggleSearchPanel} type="button"
          className="search-bar__close" aria-label="Close search panel">
          <SvgSprite passClassName="fill-white" iconId="arrow-up" />
        </button>
        <input type="text" className="form-field search-bar__field"
          placeholder="keywords, authors, etc." />
      </form>
    );
  }
  
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
