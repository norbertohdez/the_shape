import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from '../../img/svg/sprite.svg'
import getIconIdList from '../../services/iconIdService';

/* CORE -------------------------------------- */

class SvgSprite extends Component {

  render() {
    return (
      <svg role="presentation" viewBox={'0 0 ' + this.props.viewBox} className={this.props.svgClasses}>
        <use xlinkHref={svg + '#' + this.props.iconId}></use>
      </svg>
    );
  }

}

SvgSprite.propTypes = {
  viewBox:    PropTypes.string,
  svgClasses: PropTypes.string,
  iconId:     PropTypes.oneOf(getIconIdList()).isRequired
};

SvgSprite.defaultProps = {
  viewBox: '100 100',
};

export default SvgSprite;
