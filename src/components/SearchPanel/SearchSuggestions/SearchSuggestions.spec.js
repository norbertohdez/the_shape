import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';

import SearchSuggestions from './SearchSuggestions';

describe('<SearchSuggestions />', () => {

  const wrapper = mount(<SearchSuggestions />);

  it('Should render main container', () => {
    expect(wrapper.find('div.bg-white')).to.have.length(1);
  });
});
