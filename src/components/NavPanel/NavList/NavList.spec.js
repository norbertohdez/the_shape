import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import NavList from './NavList';
import navService from '../../../services/navService';

describe('<NavList />', ()=>{

  let instance = TestUtils.renderIntoDocument(<NavList />);
  let navItems = navService().NavList;

  it('Should render ' + navItems.length + ' elements in the list', () => {

    let listItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'nav-list__item');
    expect(listItems.length).to.equal(navItems.length);
  });

});
