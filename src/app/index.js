import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { gql } from 'apollo-boost';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS

const IndexPage = () => {
  const { isLoggedIn } = useIdentityContext();
  const [dialog, setDialog] = React.useState(false);
  const [getUser] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: (resultData) => {
      if (resultData && resultData.findUserByEmail) {
        // TODO set in the cookie
        navigate('/courses');
      }
    },
  });

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (resultData) => {
      navigate('/courses');
    },
  });

  useEffect(() => {
    if (isLoggedIn) navigate('/courses');
  }, []);

  return (
    <div>
      <h1>Ludus Platform</h1>
      <p>Welcome to our training platform for becoming an expert.</p>
      <button onClick={() => setDialog(true)}>Login▶️</button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => {
          getUser({
            variables: { email: user.email },
          });
        }}
        onSignup={(user) => {
          createUser({
            variables: {
              data: {
                name: user.user_metadata.full_name,
                email: user.email,
                registerDate: new Date().toISOString(),
              },
            },
          });
        }}
      />
    </div>
  );
};

export default IndexPage;

const GET_USER_BY_EMAIL = gql`
  query getUserByMail($email: String!) {
    findUserByEmail(email: $email) {
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      _id
      name
      email
    }
  }
`;
