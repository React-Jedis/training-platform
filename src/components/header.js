import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { string } from 'prop-types';
import Img from 'gatsby-image';

import Burger from '../assets/svg/bars-solid.svg';

const Header = ({ siteTitle }) => {
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
      <Burger
        width="2.5rem"
        className="pb-1 pt-1 pl-2 pr-2 m-2 border rounded-md hover:bg-black hover:bg-opacity-25 hover:opacity-75 cursor-pointer"
      />
      <span className="text-xl">{siteTitle}</span>
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
