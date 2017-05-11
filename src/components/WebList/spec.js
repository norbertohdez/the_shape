import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import WebList from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<WebList />', () => {

  it('Should render main container', () => {
    const wrapper = mount(<WebList />);
    expect(wrapper.find('.weblist')).to.have.length(1);
  });

});
