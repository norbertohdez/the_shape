import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Header from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Header />', () => {

  const wrapper = mount(<Header />);

  it('Should render main container', () => {
    expect(wrapper.find('header')).to.have.length(1);
  });

  it('Should render NavPanel inside', () => {
    expect(wrapper.find('NavPanel')).to.have.length(1);
  });

});
