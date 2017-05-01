import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TopMenu from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<TopMenu />', () => {

  const wrapper = mount(<TopMenu />);

  it('Should render main container', () => {
    expect(wrapper.find('.top-menu')).to.have.length(1);
  });

  it('Should render two TopMenuItem as children', () => {
    expect(wrapper.find('TopMenuItem')).to.have.length(2);
  });
  
});
