import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Thumb from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Thumb />', () => {

  it('Should render mobile and desktop thumbnails wrapped in a link', () => {
    const wrapper = mount(<Thumb />);
    expect(wrapper.find('a .webthumb__img')).to.have.length(2);
  });

});
