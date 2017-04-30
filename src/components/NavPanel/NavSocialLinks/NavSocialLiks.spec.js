import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import NavSocialLinks from './NavSocialLinks';
import navService from '../../../services/navService';

describe('<NavSocialLinks />', ()=>{

  let instance = TestUtils.renderIntoDocument(<NavSocialLinks />);
  let navItems = navService().NavSocialLinks;

  it('Should render ' + navItems.length + ' elements in the list', () => {

    let listItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'nav-social__link');
    expect(listItems.length).to.equal(navItems.length);
  });

});
