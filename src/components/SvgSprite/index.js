import React, {Component} from 'react';
import PropTypes from 'prop-types';
import svg from '../../img/svg/sprite.svg'
import getIconIdList from '../../services/iconIdService';

// -------------------------------------

const propTypes = {
  viewBox:    PropTypes.string,
  passClassName: PropTypes.string,
  iconId:     PropTypes.oneOf(getIconIdList()).isRequired
};

const defaultProps = {
  viewBox:    '100 100',
  passClassName: null
};

class SvgSprite extends Component {

  render() {
    return (
      <svg
        role="presentation"
        viewBox={'0 0 ' + this.props.viewBox}
        className={this.props.passClassName}
      >
        <use xlinkHref={svg + '#' + this.props.iconId}></use>
      </svg>
    );
  }

}

SvgSprite.propTypes = propTypes;
SvgSprite.defaultProps = defaultProps;

export default SvgSprite;
