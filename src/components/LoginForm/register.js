import React, { useState, useContext } from 'react';
import firebase from '../../components/firebase';

import FirebaseContext from '../../context/Firebase';

const LoginForm = ({ toggleIsLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fbContext = useContext(FirebaseContext);

  const postRegister = (result) => {
    console.log('postRegister -> result', result);
    const { user, additionalUserInfo } = result;
    const newUser = {
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl,
    };
    if (additionalUserInfo.providerId === 'google.com') {
      newUser['name'] = additionalUserInfo.given_name;
      newUser['surName'] = additionalUserInfo.family_name;
      newUser['locale'] = additionalUserInfo.locale;
    }
    fbContext.firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .set(newUser);
  };

  const registerHandler = () => {
    fbContext.firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(postRegister)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('[register error]', errorCode, errorCode);
      });
  };

  const registerGoogleHandler = () => {
    const provider = new fbContext.firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    fbContext.firebase.auth().signInWithPopup(provider).then(postRegister);
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          className="p-2 m-2 text-black"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
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
