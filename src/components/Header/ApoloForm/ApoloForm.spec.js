import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import ApoloForm from './ApoloForm';

chai.use(chaiEnzyme());

describe('<ApoloForm />', () => {

  const wrapper = mount(<ApoloForm />);

  it('Should render main container', () => {
    expect(wrapper.find('.apolo')).to.have.length(1);
  });

});
