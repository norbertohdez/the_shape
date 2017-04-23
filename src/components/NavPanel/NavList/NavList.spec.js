import React from 'react';
import ReactDOM from 'react-dom';
import NavList from './NavList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavList />, div);
});
