import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import WebItem from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<WebItem />', () => {
  
  const wrapper = mount(<WebItem />);

  it('Should render main container', () => {
    expect(wrapper.find('article.webitem')).to.have.length(1);
  });

});
