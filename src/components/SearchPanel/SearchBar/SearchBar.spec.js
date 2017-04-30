import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {

  const wrapper = mount(<SearchBar />);

  it('Should render main container', () => {
    expect(wrapper.find('.search-bar')).to.have.length(1);
  });
});
