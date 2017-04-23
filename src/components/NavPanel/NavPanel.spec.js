import React from 'react';
import ReactDOM from 'react-dom';
import NavPanel from './NavPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavPanel />, div);
});
