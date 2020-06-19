import React, { useState, useContext } from 'react';

import FirebaseContext from '../../context/Firebase';

const LoginForm = ({ toggleIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fbContext = useContext(FirebaseContext);

  const loginHandler = () => {
    fbContext.firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[register error]', errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div>
        <label>Email</label>
        <input
          className="p-2 m-2 text-black"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="p-2 m-2 text-black"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="button" onClick={loginHandler}>
        LOGIN
      </button>
      <p>
        If you don't have account{' '}
        <button type="button" onClick={toggleIsLogin}>
          SignUp
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
