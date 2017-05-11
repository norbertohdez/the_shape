import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Cover from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Cover />', () => {

  const wrapper = mount(<Cover />);
  it('Should render main container', () => {
    expect(wrapper.find('.cover')).to.have.length(1);
  });

});
