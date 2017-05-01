import React, {Component} from 'react';
import ProgressBar from '../../ProgressBar';
import ListSuggestions from './ListSuggestions';
import './styles.css';

// -------------------------------------

class SearchSuggestions extends Component {

  render() {
    const authors = [
      {
        label: "John Doe",
        link: "#John"
      },
      {
        label: "Frank Zappa",
        link: "#Frank"
      },
      {
        label: "Matt Pierce",
        link: "#Matt"
      }
    ];
    const websites = [
      {
        label: "Facebook",
        link: "#facebook"
      },
      {
        label: "Twitter",
        link: "#Twitter"
      },
      {
        label: "Instagram",
        link: "#Instagram"
      }
    ];
    const colorsAndTags = [
      {
        label: "Color",
        link: "#color"
      },
      {
        label: "Tag",
        link: "#Tag"
      },
      {
        label: "Color2",
        link: "#Color2"
      }
    ];

    return (
      <div className="bg-white l-p1 l-pb2 l-pr">
        <ProgressBar 
          whatDoing="Fetching suggestions for your search"
          isSearch
        />
        <ListSuggestions title="Websites" elements={ websites } />
        <ListSuggestions title="Authors" elements={ authors } />
        <ListSuggestions title="Tags and Colors" elements={ colorsAndTags } />

        <p className="heading-lines t-scale-75d">or</p>
        <div className="l-mt1">
          <a href className="search__link">
            <strong>Just Search</strong>:
            Keyword input value
          </a>
        </div>
      </div>
    );
  }
}

export default SearchSuggestions;
