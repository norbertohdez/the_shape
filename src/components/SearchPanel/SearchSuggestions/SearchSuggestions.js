import React, { Component } from 'react';

import './SearchSuggestions.css';

import copyService from '../../../services/copyService';

/* CORE -------------------------------------- */

class SearchSuggestions extends Component {

  render() {
    let copy = copyService().SearchSuggestions;
    return (
      <div className="bg-white l-p1 l-pb2 l-pr">
        {
          /*
          @TODO: Progress bar, List and link components
          <progress-bar>
            <div className="progress-bar__container progress-bar__container--search">
              <div className="progress-bar__lines">
                <div className="t-accessible">Loading...</div>
              </div>
            </div>
          </progress-bar>
          */
        }
        <p className="heading-lines t-scale-75d">
          { copy.TITLE_WEBSITES }
        </p>
        <ul className="l-mv1 columns-list-min2">
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
        </ul>
        <p className="heading-lines t-scale-75d">
          { copy.TITLE_AUTHORS }
        </p>
        <ul className="l-mv1 columns-list-min2">
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
        </ul>
        <p className="heading-lines t-scale-75d">
          { copy.TITLE_TAGS_COLORS }
        </p>
        <ul className="l-mv1 columns-list-min2">
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
          <li><a className="search__link" href>Resultado 1</a></li>
        </ul>
        <p className="heading-lines t-scale-75d">or</p>
        <div className="l-mt1">
          <a href className="search__link"><strong>
            { copy.LINK_SEARCH }
            </strong>: Keyword input value
          </a>
        </div>
      </div>
    );
  }
}

export default SearchSuggestions;
