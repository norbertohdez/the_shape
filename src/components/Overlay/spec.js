import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Overlay from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Overlay />', () => {

  it('Should render main div', () => {
    const wrapper = mount(<Overlay />);
    expect(wrapper.find('.overlay')).to.have.length(1);
  });

});
