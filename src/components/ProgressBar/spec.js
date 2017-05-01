import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ProgressBar from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<ProgressBar />', () => {

  it('Should render inner text passed from prop whatDoing', () => {
    const wrapper = mount(<ProgressBar whatDoing="Fetching suggestions" />);
    expect(wrapper.find('.t-accessible'))
      .to.have.html().match(/Fetching suggestions/);
  });

  it('Should use proper className used in Search context', () => {
    const wrapper = mount(<ProgressBar isSearch />);
    expect(wrapper.find('.progress-bar--search')).to.have.length(1);
  });

  it('Should use proper className used in PageLoad context', () => {
    const wrapper = mount(<ProgressBar isPageLoader />);
    expect(wrapper.find('.progress-bar--pageloader')).to.have.length(1);
  });

  it('Should render default inner text if no prop whatDoing', () => {
    const wrapper = mount(<ProgressBar />);
    expect(wrapper.find('.t-accessible'))
      .to.have.html().match(/Fetching data/);
  });

});
