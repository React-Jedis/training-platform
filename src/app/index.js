import React from 'react';
import { navigate } from 'gatsby'; // delete if you want to bring your own CSS

const IndexPage = () => {
  const [dialog, setDialog] = React.useState(false);

  return (
    <div>
      <h1>Ludus Platform</h1>
      <p>Welcome to our training platform for becoming an expert.</p>
      <button onClick={() => setDialog(true)}>Login▶️</button>
    </div>
  );
};

export default IndexPage;
