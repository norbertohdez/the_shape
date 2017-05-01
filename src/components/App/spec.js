import React from 'react';
import {mount, render, shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import App from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<App />', () => {

  it('Should render main container', () => {
  	const wrapper = mount(<App />);
    expect(wrapper.find('.no-touch')).to.have.length(1);
  });

});
