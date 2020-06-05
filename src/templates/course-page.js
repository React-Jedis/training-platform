import React from 'react';
import { graphql } from 'gatsby';

import LessonEntry from '../components/lessonEntry';

const CoursePage = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap">
      <div className="border border-gray-800">
        <div dangerouslySetInnerHTML={{ __html: data.courses.nodes[0].html }} />
        {data.lessons.nodes.map((lesson) => (
          <LessonEntry {...lesson.frontmatter} link={lesson.fields.slug} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;

export const pageQuery = graphql`
  query($slug: String!) {
    courses: allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          type
          title
          templateKey
          price
          id
          description
          author
        }
        fields {
          slug
        }
        html
      }
    }
    lessons: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: $slug } }
        frontmatter: { type: { eq: "lesson" } }
      }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
