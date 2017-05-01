import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgSprite from '../SvgSprite'
import getIconIdList from '../../services/iconIdService';
import './styles.css';

// -------------------------------------

const propTypes = {
  label:         PropTypes.string.isRequired,
  to:            PropTypes.string,
  passClassName: PropTypes.string,
  onlyIcon:      PropTypes.bool,
  iconId:        PropTypes.oneOf(getIconIdList()),
  size:          PropTypes.oneOf(['mini', 'full', 'callToAction', 'loadMore']),
  theme:         PropTypes.oneOf(['secondary', 'tertiary', 'mint']),
  buttonType:    PropTypes.oneOf(['button', 'submit'])
};

const defaultProps = {
  to:            null,
  passClassName: null,
  onlyIcon:      false,
  iconId:        null,
  size:          null,
  theme:         null,
  buttonType:    'button'
};

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
   * Takes care of classNames assignment
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
    const btnClasses = classNames(this.assingClassNames(props));
    const attrs = {
      className: btnClasses + ' ' + props.passClassName,
      title: props.label
    };

    if (props.disabled || this.state.disabled) {
      attrs['disabled'] = 'disabled';
    }
    if (props.to) {
      attrs['href'] = props.to;
    } else {
      attrs['type'] = props.buttonType;
    }

    return attrs;
  }

  /**
   * Returns markup structure needed
   * depending on different conditions
   */
  generateContent(props) {
    let output = [];
    // Btn w/icon
    if (props.iconId) { 
      output.push(
        <SvgSprite key="1" passClassName="btn__i" iconId={props.iconId} />
      )
    }
    // No-text Btn w/icon
    if (props.onlyIcon) {
      output.unshift(
        <span key="2" className="t-accessible">{props.label}</span>
      )
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
    return <button {...attrs}>{this.generateContent(this.props)}</button>
  }

  /**
   * Renders Anchor tag
   * @param   {object} attrs - Attributes for main tag
   * @returns {object[]} JSX corresponding markup
   */
  renderAnchor(attrs) {
    return <a {...attrs}>{this.generateContent(this.props)}</a>
  }

  render() {
    let attrs = this.prepareTagAttributes(this.props);
    return this.props.to ? this.renderAnchor(attrs) : this.renderButton(attrs);
  }

}

Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;

export default Btn;
