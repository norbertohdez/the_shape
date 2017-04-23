import React from 'react';
import ReactDOM from 'react-dom';
import NavSocialLinks from './NavSocialLinks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavSocialLinks />, div);
});
