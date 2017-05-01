import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import TopMenuItem from './';

chai.use(chaiEnzyme());

describe('<TopMenuItem />', () => {

  const wrapper = mount(<TopMenuItem iconId="hamburguer" label="Menu" />);

  it('Should render markup for hamburguer icon', () => {
    expect(wrapper.find('.t-accessible')).to.have.html().match(/Menu/);
  });

  it('Should render the text in an Accessible tag', () => {
    expect(wrapper.find('.i-nav__str')).to.have.length(3);
  });

  it('Should render markup for zoom icon', () => {
    const wrapper = mount(<TopMenuItem iconId="zoom" label="Search" />);
    expect(wrapper.find('.i-nav__zoom')).to.have.length(2);
  });

});
