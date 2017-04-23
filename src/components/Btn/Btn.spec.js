import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';

import Btn from './Btn';
import SvgSprite from '../SvgSprite/SvgSprite'

describe('<Btn />', ()=>{

  it('Should take its inner text from label property', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" />);
    let el = ReactDOM.findDOMNode(instance);
    expect(el.textContent).to.equal('Test');
  });

  it('Should render type as button by default', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('type'), 'button');
  });

  it('Should render an anchor due to href presence', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" href="#" />);
    let el = ReactDOM.findDOMNode(instance);
    expect(el.nodeName).to.equal('A');
  });

  it('Should pass href attribute to anchor', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" href="#" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('href'), '#');
  });

  it('Should pass type attribute to button tag', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" type="submit" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('type'), 'submit');
  });

  it('Should render the text in an Accessible tag when "onlyIcon" is true', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" iconId="facebook" onlyIcon={true} />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.firstChild.className.match(/\bt-accessible\b/));
    expect(el.firstChild.textContent).to.equal('Test');
  });

  it('Should render SvgSprite\'s svg component inside', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" iconId="facebook" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.innerHTML.match(/\bsvg\b/));
  });

  it('Should render the btn sized mini', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" size="mini" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.className.match(/\bbtn--mini\b/));
  });

  it('Should render the btn themed mint', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" theme="mint" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.className.match(/\bbtn--mint\b/));
  });

  it('Should render disabled btn', () => {
    let instance = TestUtils.renderIntoDocument(<Btn label="Test" disabled />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.className.match(/\bbtn--disabled\b/));
  });

});
