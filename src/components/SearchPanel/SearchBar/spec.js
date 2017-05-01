import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBar from './';

// -------------------------------------

describe('<SearchBar />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<SearchBar />);
    expect(wrapper.find('.search-bar')).to.have.length(1);
  });

});
