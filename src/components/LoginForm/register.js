import React, { useState } from 'react';
import useFirebase from '../../hook/useFirebase';

const LoginForm = ({ toggleIsLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();

  const registerHandler = () => {
    if (!firebase) return;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => console.log(result))
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[register error]', errorCode, errorMessage);
      });
  };

  const registerGoogleHandler = () => {
    if (!firebase) return;
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(result))
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
      <button type="button" onClick={registerHandler}>
        REGISTER
      </button>
      <button type="button" onClick={registerGoogleHandler}>
        REGISTER Google
      </button>
      <p>
        If already have an account{' '}
        <button type="button" onClick={toggleIsLogin}>
          SignIn
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
