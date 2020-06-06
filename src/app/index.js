import React from 'react';
import { navigate } from 'gatsby';

import { IdentityModal } from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS

const IndexPage = () => {
  const [dialog, setDialog] = React.useState(false);
  return (
    <div>
      <h1>Ludus Platform</h1>
      <p>Welcome to our training platform for becoming an expert.</p>
      <button onClick={() => setDialog(true)}>Login▶️</button>
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => navigate('/courses')}
        onSignup={(user) => navigate('/courses')}
      />
    </div>
  );
};

export default IndexPage;
