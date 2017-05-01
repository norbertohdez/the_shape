import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import NavPanel from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<NavPanel />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<NavPanel />);
    expect(wrapper.find('.nav-panel')).to.have.length(1);
  });

});
