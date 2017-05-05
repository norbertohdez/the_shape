import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SitesList from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SitesList />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<SitesList />);
    expect(wrapper.find('.siteslist')).to.have.length(1);
  });

});
