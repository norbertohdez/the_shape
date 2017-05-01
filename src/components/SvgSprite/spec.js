import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SvgSprite from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SvgSprite />', () => {

  it('Should render svg tag inside', () => {
    const wrapper = mount(<SvgSprite iconId="facebook" />);
    expect(wrapper.find('svg')).to.be.length(1);
  });

  it('Should pass passClassName to svg tag class name inside', () => {
    const wrapper = mount(<SvgSprite passClassName="btn__i" iconId="facebook" />);
    expect(wrapper.find('.btn__i')).to.be.length(1);
  });

  it('Should have viewBox of \'0 0 100 100\' by default', () => {
    const wrapper = mount(<SvgSprite iconId="facebook" />);
    expect(wrapper.find('svg')).to.have.attr('viewBox', '0 0 100 100')
  });

  it('Should complete viewBox attribute from props passed', () => {
    const wrapper = mount(<SvgSprite iconId="facebook" viewBox="200 200" />);
    expect(wrapper.find('svg')).to.have.attr('viewBox', '0 0 200 200')
  });

});
