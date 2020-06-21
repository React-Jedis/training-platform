import React, { useState, useContext } from 'react';
import FirebaseContext from '../../context/Firebase';
import useFirestoreBase from '../../hook/useFirestoreBase';

const LoginForm = ({ toggleIsLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fbContext = useContext(FirebaseContext);
  const { createDocument, getDocumentByUID } = useFirestoreBase();

  const postRegister = (result) => {
    getDocumentByUID('users', result.user.uid).then((existingUser) => {
      if (!existingUser) {
        const { user, additionalUserInfo } = result;
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        if (additionalUserInfo.providerId === 'google.com') {
          newUser['name'] = additionalUserInfo.profile.given_name;
          newUser['surName'] = additionalUserInfo.profile.family_name;
          newUser['locale'] = additionalUserInfo.profile.locale;
        }
        console.log(`[Creating user]: ${JSON.stringify(newUser)}`);
        createDocument('users', user.uid, newUser).then((result) =>
          console.log('User created: ', result)
        );
      }
    });
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
        console.log('[register error]', errorCode, errorMessage);
      });
  };

  const registerGoogleHandler = () => {
    const provider = new fbContext.firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    fbContext.firebase
      .auth()
      .signInWithPopup(provider)
      .then(postRegister)
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
