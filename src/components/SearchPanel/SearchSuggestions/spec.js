import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';
import SearchSuggestions from './';

// -------------------------------------

describe('<SearchSuggestions />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<SearchSuggestions />);
    expect(wrapper.find('div.bg-white')).to.have.length(1);
  });

});
