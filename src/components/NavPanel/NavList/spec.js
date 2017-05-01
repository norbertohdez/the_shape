import React from 'react';
import TestUtils from 'react-dom/test-utils';
import {expect} from 'chai';
import NavList from './';
import navService from '../../../services/navService';

// -------------------------------------

describe('<NavList />', ()=>{

  const instance = TestUtils.renderIntoDocument(<NavList />);
  const navItems = navService().NavList;

  it('Should render ' + navItems.length + ' elements in the list', () => {
    const listItems = TestUtils.scryRenderedDOMComponentsWithClass(
      instance, 'nav-list__item'
    );
    expect(listItems.length).to.equal(navItems.length);
  });

});
