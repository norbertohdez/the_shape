import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { expect } from 'chai';

import SearchPanel from './SearchPanel';

describe('<SearchPanel />', () => {

  const wrapper = mount(<SearchPanel />);

  it('Should render main container', () => {
    expect(wrapper.find('.search-panel')).to.have.length(1);
  });
});
