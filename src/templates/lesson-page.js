import React from 'react';
import { graphql } from 'gatsby';

const LessonPage = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap">
      <div className="border border-gray-800">
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.nodes[0].html,
          }}
        />
      </div>
    </div>
  );
};

export default LessonPage;

export const pageQuery = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: {
        fields: { slug: { eq: $slug } }
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
        html
      }
    }
  }
`;
