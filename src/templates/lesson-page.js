import React, { useContext, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import UserContext from '../context/User';
import { useEffect } from 'react';

const LessonPage = ({ data }) => {
  console.log('LessonPage -> data', data);
  const { user } = useContext(UserContext);
  const [enrolled, setEnrolled] = useState(false);

  const lessonMD = data.allMarkdownRemark.nodes[0];

  useEffect(() => {
    console.log('LessonPage -> lessonMD', lessonMD);
    if (user) {
      if (!lessonMD.frontmatter.free) {
        const course = /(.*)\/courses\/(.*)\/lessons(.*)/g.exec(
          lessonMD.fileAbsolutePath
        )[2];
        setEnrolled(user && user.roles && user.roles.includes(course));
      } else {
        setEnrolled(true);
      }
    }
  }, [user]);

  useEffect(() => {
    if (!enrolled) alert('Show me the money!!!');
  }, [enrolled]);

  return (
    <div className="flex flex-wrap">
      <div className="border border-gray-800">
        {enrolled && (
          <div
            dangerouslySetInnerHTML={{
              __html: lessonMD.html,
            }}
          />
        )}
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
        html
        fileAbsolutePath
      }
    }
  }
`;
