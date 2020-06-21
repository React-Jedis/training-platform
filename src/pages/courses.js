import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CourseCard from '../components/courseCard';

const Courses = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "course" } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            author
            description
            price
            title
            type
            role
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-wrap">
      {data.allMarkdownRemark.nodes.map((course) => (
        <CourseCard {...course.frontmatter} link={course.fields.slug} />
      ))}
    </div>
  );
};

export default Courses;
