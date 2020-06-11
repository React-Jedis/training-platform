import './src/css/style.css';
import './src/css/global.css';

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_CLIENT_KEY}`,
      },
    });
  },
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
