import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

const FAUNA_CLIENT_KEY = process.env.FAUNA_CLIENT_KEY;

const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  fetch,
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${FAUNA_CLIENT_KEY}`,
      },
    });
  },
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
