import React from 'react';
import {mount, render, shallow} from 'enzyme';
import {expect} from 'chai';
import SearchPanel from './';

// -------------------------------------

describe('<SearchPanel />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<SearchPanel />);
    expect(wrapper.find('.search-panel')).to.have.length(1);
  });

});
