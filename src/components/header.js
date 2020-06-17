import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { string } from 'prop-types';
import Img from 'gatsby-image';

import Burger from '../assets/svg/bars-solid.svg';
import UserContext from '../context/User';
import Logout from './LoginForm/logout';

const Header = ({ siteTitle }) => {
  const { user } = useContext(UserContext);
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "LogoMakr" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className="flex items-center justify-between bg-corporative-3 min-h-35 pl-2 pr-2">
      <span className="text-xl">{siteTitle}</span>
      <span>{user ? user.email : null}</span> <Logout />
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
      </Link>
    </header>
  );
};

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
