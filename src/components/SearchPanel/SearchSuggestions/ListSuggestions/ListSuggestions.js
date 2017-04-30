import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* CORE -------------------------------------- */

class ListSuggestions extends Component {

  /**
   * Takes array and iterates to render inner list markup
   * @param   {object[]} items - Links to render
   * @returns {object} JSX markup
   */
  getList(items) {
    return items.map((item) => {
      return (
        <li key={ items.indexOf(item).toString() }>
          <a className="search__link" href={item.link}>{item.label}</a>
        </li>
      )
    });
  }

  render() {
    return (!this.props.elements || !this.props.elements.length) ? null : (
      <div>
        <p className="heading-lines t-scale-75d">
          { this.props.title }
        </p>
        <ul className="l-mv1 columns-list-min2">
          { this.getList(this.props.elements) }
        </ul>
      </div>
    );
  }
}

ListSuggestions.propTypes = {
  title: PropTypes.string.isRequired
};

export default ListSuggestions;
