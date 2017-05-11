import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SiteInfo from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SiteInfo />', () => {

  const wrapper = mount(<SiteInfo />);
  it('Should render main container', () => {
    expect(wrapper.find('.siteinfo')).to.have.length(1);
  });
});
