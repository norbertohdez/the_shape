import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';

import TopMenuItem from './TopMenuItem';

describe('<TopMenuItem />', () => {

  it('Should render the text in an Accessible tag', () => {
    let instance = TestUtils.renderIntoDocument(<TopMenuItem iconId="zoom" label="Test" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.firstChild.firstChild.className.match(/\bt-accessible\b/));
    expect(el.firstChild.firstChild.innerHTML).to.equal('Test');
  });

  it('Should render markup for hamburguer icon', () => {
    let instance = TestUtils.renderIntoDocument(<TopMenuItem iconId="hamburguer" label="Test" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.firstChild.childNodes[1].firstChild.className.match(/\bi-nav__str\b/));
    expect(el.firstChild.childNodes[1].childNodes.length).to.equal(3);
  });

  it('Should render markup for zoom icon', () => {
    let instance = TestUtils.renderIntoDocument(<TopMenuItem iconId="zoom" label="Test" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.firstChild.childNodes[1].firstChild.className.match(/\bi-nav__zoom\b/));
    expect(el.firstChild.childNodes[1].childNodes.length).to.equal(2);
  });

});
