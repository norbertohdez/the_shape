import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

import SvgSprite from '../../SvgSprite/SvgSprite';


/* CORE -------------------------------------- */

class SearchBar extends Component {

  render() {
    return (
      <form action="#" className="search-bar">
        <button onClick={this.props.toggleSearchPanel} type="button"
          className="search-bar__close" aria-label="Close search panel">
          <SvgSprite svgClasses="fill-white" iconId="arrow-up" />
        </button>
        <input type="text" className="form-field search-bar__field"
          placeholder="keywords, authors, etc." />
      </form>
    );
  }
}

SearchBar.propTypes = {
  toggleSearchPanel: PropTypes.func
};

export default SearchBar;
