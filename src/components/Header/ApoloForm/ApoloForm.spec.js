import React from 'react';
import ReactDOM from 'react-dom';
import ApoloForm from './ApoloForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApoloForm />, div);
});
