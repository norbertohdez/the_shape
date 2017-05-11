import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Share from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Share />', () => {
  
  const wrapper = mount(<Share />);
  it('Should render 4 buttons', () => {
    expect(wrapper.find('button')).to.have.length(4);
  });

});
