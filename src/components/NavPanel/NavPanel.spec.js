import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import NavPanel from './NavPanel';

chai.use(chaiEnzyme());

describe('<NavPanel />', () => {

  const wrapper = mount(<NavPanel />);

  it('Should render main container', () => {
    expect(wrapper.find('.nav-panel')).to.have.length(1);
  });

});
