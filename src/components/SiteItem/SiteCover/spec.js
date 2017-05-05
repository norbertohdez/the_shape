import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SiteCover from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SiteCover />', () => {

  const wrapper = mount(<SiteCover />);
  it('Should render main container', () => {
    expect(wrapper.find('.sitecover')).to.have.length(1);
  });

});
