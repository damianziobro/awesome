import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';

import './index.sass';

class Layout extends Component {
  state = {
    isNavOpen: false,
  };

  handleToggleNav = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  };

  handleCloseNav = () => {
    this.setState({ isNavOpen: false });
  };

  render() {
    const { isNavOpen } = this.state;

    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Awesome website' }]}
          link={[
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:200,600',
            },
          ]}
        />
        <Header
          isNavOpen={isNavOpen}
          onToggleNav={this.handleToggleNav}
          onCloseNav={this.handleCloseNav}
        />
        {this.props.children()}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
