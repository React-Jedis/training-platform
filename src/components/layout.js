import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import useAuth from '../hook/useAuth';
import UserContext from '../context/User';
import RolesContext from '../context/Roles';

const Layout = ({ children }) => {
  const { user, roles } = useAuth();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col text-white min-h-screen">
      <UserContext.Provider value={{ user }}>
        <RolesContext.Provider value={{ roles }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="flex-grow mx-auto w-auto md:px-8 p-8">
            {children}
          </main>
          <Footer />
        </RolesContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
