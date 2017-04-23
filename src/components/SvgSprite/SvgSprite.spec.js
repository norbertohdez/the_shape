import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { assert, expect } from 'chai';

import SvgSprite from './SvgSprite'

describe('<SvgSprite />', ()=>{

  it('Should render svg tag inside', () => {
    let instance = TestUtils.renderIntoDocument(<SvgSprite iconId="facebook" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.ok(el.innerHTML.match(/\bsvg\b/));
  });

  it('Should pass svgClasses to svg tag class name inside', () => {
    let instance = TestUtils.renderIntoDocument(<SvgSprite svgClasses="btn__i" iconId="facebook" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('class'), 'btn__i');
  });

  it('Should have viewBox of \'0 0 100 100\' by default', () => {
    let instance = TestUtils.renderIntoDocument(<SvgSprite iconId="facebook" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('viewBox'), '0 0 100 100');
  });

  it('Should complete viewBox attribute from props passed', () => {
    let instance = TestUtils.renderIntoDocument(<SvgSprite viewBox="200 200" iconId="facebook" />);
    let el = ReactDOM.findDOMNode(instance);
    assert.equal(el.getAttribute('viewBox'), '0 0 200 200');
  });

});
