import React, { useEffect, useContext } from 'react';
import { navigate } from 'gatsby';

import LoginForm from '../components/LoginForm';
import UserContext from '../context/User';

const IndexPage = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/courses');
    }
  }, [user]);

  return (
    <div>
      <h1>Ludus Platform</h1>
      <p>Welcome to our training platform for becoming an expert.</p>

      {!user && <LoginForm />}
    </div>
  );
};

export default IndexPage;
