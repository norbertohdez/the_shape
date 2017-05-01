import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../../Header';
import Overlay from '../../../Overlay';
import SearchPanel from '../../../SearchPanel';

// -------------------------------------

const propTypes = {
  content:           PropTypes.object.isRequired,
  toggleNav:         PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

const defaultProps = {
  toggleNav: null,
  toggleSearchPanel: null
};

class Page extends Component {

  render() {
    return (
      <div>
        <div className="column-action">
          <Header
            toggleNav={this.props.toggleNav}
            toggleSearchPanel={this.props.toggleSearchPanel}
          />
        </div>
        <div className="column-content">
          <SearchPanel toggleSearchPanel={this.props.toggleSearchPanel} />
          {this.props.content}
        </div>
        <Overlay />
      </div>
    );
  }

}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
