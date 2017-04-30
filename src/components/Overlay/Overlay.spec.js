import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Overlay from './Overlay';

chai.use(chaiEnzyme());

describe('<Overlay />', () => {

  const wrapper = mount(<Overlay />);
  it('Should render main div', () => {
    expect(wrapper.find('.overlay')).to.have.length(1);
  });

});
