import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from './TopMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopMenu />, div);
});
