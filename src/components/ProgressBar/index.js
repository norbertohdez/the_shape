// @TODO: Add aria attributtes and add HIDE state

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

// -------------------------------------

const propTypes = {
  isSearch:     PropTypes.bool,
  isPageLoader: PropTypes.bool,
  whatDoing:    PropTypes.string
};

const defaultProps = {
  isSearch:     false,
  isPageLoader: false,
  whatDoing:    'Fetching data'
};

class ProgressBar extends Component {

  /**
   * Takes care of classNames assignment
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
          <div className="t-accessible">
            {this.props.whatDoing}
          </div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
