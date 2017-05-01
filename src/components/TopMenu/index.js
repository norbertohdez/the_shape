import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopMenuItem from './TopMenuItem';
import './styles.css';

// -------------------------------------

const propTypes = {
  toggleNav: PropTypes.func,
  toggleSearchPanel: PropTypes.func
};

const defaultProps = {
  toggleNav: null,
  toggleSearchPanel: null
};

class TopMenu extends Component {

  render() {
    return (
      <ul className="top-menu l-p--xs l-m0">
        <TopMenuItem
          action={this.props.toggleNav}
          iconId="hamburguer"
          label="Menu"
        />
        <TopMenuItem
          action={this.props.toggleSearchPanel}
          iconId="zoom"
          label="Search"
        />
      </ul>
    );
  }

}

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
