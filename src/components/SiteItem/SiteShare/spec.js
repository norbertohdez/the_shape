import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SiteShare from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SiteShare />', () => {
  
  const wrapper = mount(<SiteShare />);
  it('Should render 4 buttons', () => {
    expect(wrapper.find('button')).to.have.length(4);
  });

});
