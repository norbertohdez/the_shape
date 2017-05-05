import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SiteItem from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SiteItem />', () => {
  
  const wrapper = mount(<SiteItem />);

  it('Should render main container', () => {
    expect(wrapper.find('article.site')).to.have.length(1);
  });

  it('Should render at least 1 thumbnail', () => {
    expect(wrapper.find('img')).to.have.length;
  });

});
