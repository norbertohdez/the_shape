import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SiteThumbnails from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<SiteThumbnails />', () => {

  it('Should render mobile and desktop thumbnails', () => {
    const wrapper = mount(<SiteThumbnails />);
    expect(wrapper.find('.thumb__img')).to.have.length(2);
  });

});
