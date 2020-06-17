import React, { useState } from 'react';

import Login from './login';
import Register from './register';

const LoginForm = () => {
  const [isLogin, toggleIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Login toggleIsLogin={() => toggleIsLogin(!isLogin)} />
      ) : (
        <Register toggleIsLogin={() => toggleIsLogin(!isLogin)} />
      )}
    </div>
  );
};

export default LoginForm;
