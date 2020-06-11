import React from 'react';
import { navigate } from 'gatsby';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { IdentityModal } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS

const IndexPage = () => {
  const [dialog, setDialog] = React.useState(false);

  const userId = '267982874334986757';
  const { loading, data } = useQuery(GET_USER, {
    variables: { userId },
    skip: !userId,
  });

  if (!loading && data) {
    console.log(data);
  }

  return (
    <div>
      <h1>Ludus Platform</h1>
      <p>Welcome to our training platform for becoming an expert.</p>
      <button onClick={() => setDialog(true)}>Login▶️</button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => {
          // TODO Retrieve info from FaunaDB
          navigate('/courses');
        }}
        onSignup={(user) => navigate('/courses')}
      />
    </div>
  );
};

export default IndexPage;

const GET_USER = gql`
  query getUser($userId: ID!) {
    findUserByID(id: $userId) {
      name
      email
    }
  }
`;
