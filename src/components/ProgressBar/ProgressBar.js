import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ProgressBar.css';

/* CORE -------------------------------------- */
// @TODO: Add aria attributtes

class ProgressBar extends Component {

  /**
   * Takes care of function assignment
   * @param   {object} props - instance props.
   * @returns {object} Object representing classNames evaluation
   */
  assingClassNames(props) {
    return {
      'progress-bar':             true,
      'progress-bar--search':     props.isSearch,
      'progress-bar--pageloader': props.isPageLoader
    }
  }

  render() {
    return (
      <div className={classNames(this.assingClassNames(this.props))}>
        <div className="progress-bar__lines">
          <div className="t-accessible">{ this.props.whatDoing }</div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  isSearch:     PropTypes.bool,
  isPageLoader: PropTypes.bool,
  whatDoing:    PropTypes.string
};

ProgressBar.defaultProps = {
  whatDoing: 'Fetching data'
};


export default ProgressBar;
