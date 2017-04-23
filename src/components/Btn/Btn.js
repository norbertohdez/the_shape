import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Btn.css';

import SvgSprite from '../SvgSprite/SvgSprite'
import getIconIdList from '../../services/iconIdService';


/* CORE -------------------------------------- */

class Btn extends Component {

  constructor() {
    super();
    this.state = {
      disabled: false
    }
    this.toggleDisabled = this.toggleDisabled.bind(this);
  }

  /**
   * Toggles disabled state
   */
  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  /**
   * Takes care of function assignment
   * @param   {object} props - instance props.
   * @returns {object} Object representing classNames evaluation
   */
  assingClassNames(props) {
    return {
      'btn': true,

      'btn--mini':           props.size === 'mini',
      'btn--full':           props.size === 'full',
      'btn--call-to-action': props.size === 'callToAction',
      'btn--load-more':      props.size === 'loadMore',

      'btn--i':              props.iconId && this.props.onlyIcon,
      'btn--has-i':          props.iconId && !this.props.onlyIcon,

      'btn--secondary':      props.theme === 'secondary',
      'btn--tertiary':       props.theme === 'tertiary',
      'btn--mint':           props.theme === 'mint',

      'btn--disabled':       props.disabled
    }
  }

  /**
   * Prepares attributes for final rendered tag
   * @param   {object} props - instance props.
   * @returns {object} Object representing final attributes
   */
  prepareTagAttributes(props) {
    let btnClasses = classNames(this.assingClassNames(props));
    let attrs = {
      className: btnClasses + ' ' + props.className,
      title: props.label
    };

    if (props.disabled || this.state.disabled) {
      attrs['disabled'] = 'disabled';
    }
    if (props.href) {
      attrs['href'] = props.href;
    } else {
      attrs['type'] = props.type;
    }

    return attrs;
  }

  /**
   * Returns markup structure needed
   * depending on different conditions
   */
  getContent(props) {
    let output = []
    // Btn w/icon
    if (props.iconId) {
      output.push(<SvgSprite key="1" svgClasses="btn__i" iconId={props.iconId} />)
    }
    // No-text Btn w/icon
    if (props.onlyIcon) {
      output.unshift(<span key="2" className="t-accessible">{props.label}</span>)
    }
    // Only text insidebtn
    else {
      output.unshift(props.label)
    }
    return output
  }

  /**
   * Renders Button tag
   * @param   {object} attrs - Attributes for main tag
   * @returns {object[]} JSX corresponding markup
   */
  renderButton(attrs) {
    return <button {...attrs}>{this.getContent(this.props)}</button>
  }

  /**
   * Renders Anchor tag
   * @param   {object} attrs - Attributes for main tag
   * @returns {object[]} JSX corresponding markup
   */
  renderAnchor(attrs) {
    return <a {...attrs}>{this.getContent(this.props)}</a>
  }

  render() {
    let attrs = this.prepareTagAttributes(this.props);
    return !!(this.props.href) ? this.renderAnchor(attrs) : this.renderButton(attrs);
  }

}

Btn.propTypes = {
  label:    PropTypes.string.isRequired,
  href:     PropTypes.string,
  size:     PropTypes.oneOf(['mini', 'full', 'callToAction', 'loadMore']),
  type:     PropTypes.oneOf(['button', 'submit']),
  onlyIcon: PropTypes.bool,
  iconId:   PropTypes.oneOf(getIconIdList()),
  theme:    PropTypes.oneOf(['secondary', 'tertiary', 'mint'])
};

Btn.defaultProps = {
  type:  'button'
};

export default Btn;
