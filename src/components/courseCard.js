import React from 'react';
import { Link, graphql } from 'gatsby';

const CourseCard = ({ author, description, price, title, link }) => (
  <article className="border border-gray-700 p-4">
    <Link to={link}>
      <h1>{title}</h1>
    </Link>
    <p>{description}</p>
  </article>
);

export default CourseCard;

