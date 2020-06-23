import React from 'react';
import { graphql } from 'gatsby';
import LessonEntry from '../components/lessonEntry';

const CoursePage = ({ data }) => {
  console.log('CoursePage -> console.log(data);', data);
  return (
    <div className="flex flex-wrap">
      <div className="border border-gray-800">
        <div dangerouslySetInnerHTML={{ __html: data.courses.nodes[0].html }} />
        {data.lessons.nodes.map((lesson) => (
          <LessonEntry
            {...lesson.frontmatter}
            link={lesson.fields.slug}
            role={data.courses.nodes[0].frontmatter.role}
          />
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
          role
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
        fileAbsolutePath: { regex: "/lesson/" }
      }
    ) {
      nodes {
        frontmatter {
          title
          free
        }
        fields {
          slug
        }
      }
    }
  }
`;
