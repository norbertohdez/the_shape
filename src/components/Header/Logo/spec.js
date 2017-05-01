import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Logo from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Logo />', () => {

  const wrapper = mount(<Logo />);

  it('Should render main container', () => {
    expect(wrapper.find('.logo')).to.have.length(1);
  });

  it('Should render anchor link inside', () => {
    expect(wrapper.find('a')).to.have.length(1);
  });

});
