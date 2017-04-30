import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ListSuggestions from './ListSuggestions';

chai.use(chaiEnzyme());

describe('<ListSuggestions />', () => {

  const list = [
    {
      label: "Item1",
      link: "#link1"
    },
    {
      label: "Item2",
      link: "#link2"
    },
    {
      label: "Item3",
      link: "#link3"
    }
  ];

  it('Should render main container', () => {
    const wrapper = mount(<ListSuggestions title="Test List" elements={list} />);
    expect(wrapper.find('.search__link')).to.be.length(3);
  });

  it('Should return null', () => {
    const wrapper = mount(<ListSuggestions title="Test List" />);
    expect(wrapper).to.be.blank();
  });

  it('Should render title taken from props in a <p> tag ', () => {
    const wrapper = mount(<ListSuggestions title="Test List" elements={list} />);
    expect(wrapper.find('p')).to.have.html().match(/Test List/);
  });
});
