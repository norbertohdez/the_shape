import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Btn from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<Btn />', () => {

  it('Should take its inner text from label property', () => {
    const wrapper = mount(<Btn label="Test" />);
    expect(wrapper.find('.btn')).to.have.html().match(/Test/);
  });

  it('Should render type as button by default', () => {
    const wrapper = mount(<Btn label="Test" />);
    expect(wrapper.find('.btn')).to.have.attr('type', 'button')
  });

  it('Should render an anchor due to to presence', () => {
    const wrapper = mount(<Btn label="Test" to="#" />);
    expect(wrapper.find('a')).to.have.length(1)
  });

  it('Should pass prop to anchor as href', () => {
    const wrapper = mount(<Btn label="Test" to="#" />);
    expect(wrapper.find('.btn')).to.have.attr('href', '#')
  });

  it('Should pass type attribute to button tag', () => {
    const wrapper = mount(<Btn label="Test" buttonType="submit" />);
    expect(wrapper.find('.btn')).to.have.attr('type', 'submit')
  });

  it('Should render the text in an Accessible tag when "onlyIcon" is true', () => {
    const wrapper = mount(<Btn label="Test" iconId="facebook" onlyIcon={true} />);
    expect(wrapper.find('.t-accessible')).to.have.html().match(/Test/);
  });

    it('Should not render the text in an Accessible tag when "onlyIcon" is false', () => {
    const wrapper = mount(<Btn label="Test" iconId="facebook" onlyIcon={false} />);
    expect(wrapper.find('.t-accessible')).to.have.length(0);
  });

  it('Should render the text in an Accessible tag when "onlyIcon" present as bare attribute', () => {
    const wrapper = mount(<Btn label="Test" iconId="facebook" onlyIcon />);
    expect(wrapper.find('.t-accessible')).to.have.html().match(/Test/);
  });

  it('Should render SvgSprite\'s svg component inside', () => {
    const wrapper = mount(<Btn label="Test" iconId="facebook" />);
    expect(wrapper.find('svg')).to.have.length(1)
  });

  it('Should render the btn sized mini', () => {
    const wrapper = mount(<Btn label="Test" size="mini" />);
    expect(wrapper.find('.btn--mini')).to.have.length(1)
  });

  it('Should render the btn themed mint', () => {
    const wrapper = mount(<Btn label="Test" theme="mint" />);
    expect(wrapper.find('.btn--mint')).to.have.length(1)
  });

  it('Should render disabled btn', () => {
    const wrapper = mount(<Btn label="Test" disabled />);
    expect(wrapper.find('.btn')).to.be.disabled();
  });

  it('Should render anchor \'disabled\' by class', () => {
    const wrapper = mount(<Btn label="Test" to="#" disabled />);
    expect(wrapper.find('a')).to.have.className('btn--disabled');
  });

  it('Should transfer classname from passClassName prop', () => {
    const wrapper = mount(<Btn label="Test" passClassName="my-class" />);
    expect(wrapper.find('.btn')).to.have.className('my-class');
  });

});
