import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ApoloForm from './';
chai.use(chaiEnzyme());

// -------------------------------------

describe('<ApoloForm />', () => {

  it('Should render main container', () => {
  	const wrapper = mount(<ApoloForm />);
    expect(wrapper.find('.apolo')).to.have.length(1);
  });

});
