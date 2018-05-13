import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';

import './index.sass';

function Layout({ children, data }) {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Awesome website' }
        ]}
        link={[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:200,600'}
        ]}
      />
      <Header />
      {children()}
    </div>
  );
};

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
`
