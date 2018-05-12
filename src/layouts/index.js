import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.sass';

function Layout({ children, data }) {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Awesome website' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div>
        {children()}
      </div>
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
