import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import App from './App';

chai.use(chaiEnzyme());

describe('<App />', () => {

  const wrapper = mount(<App />);

  it('Should render main container', () => {
    expect(wrapper.find('.no-touch')).to.have.length(1);
  });

});
