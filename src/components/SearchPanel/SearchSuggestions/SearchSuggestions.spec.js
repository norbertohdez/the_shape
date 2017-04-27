import React from 'react';
import ReactDOM from 'react-dom';
import SearchSuggestions from './SearchSuggestions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchSuggestions />, div);
});
