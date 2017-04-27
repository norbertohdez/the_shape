import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

import SvgSprite from '../../SvgSprite/SvgSprite';

import copyService from '../../../services/copyService';

/* CORE -------------------------------------- */

class SearchBar extends Component {

  render() {
    let copy = copyService().SearchBar;
    return (
      <form action="#" className="search-bar">
        <button onClick={this.props.toggleSearchPanel} type="button"
          className="search-bar__close" aria-label={copy.BTN_CLOSE_LABEL}>
          <SvgSprite svgClasses="fill-white" iconId="arrow-up" />
        </button>
        <input type="text" className="form-field search-bar__field"
          placeholder={copy.INPUT_PLACEHOLDER} />
      </form>
    );
  }
}

SearchBar.propTypes = {
  toggleSearchPanel: PropTypes.func
};

export default SearchBar;
