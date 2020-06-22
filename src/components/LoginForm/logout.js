import React from 'react';
import useFirebase from '../../hook/useFirebase';

const Logout = () => {
  const firebase = useFirebase();

  const onLogoutHandler = () => {
    if (!firebase) return;
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.error('Sign Out Error', error);
      });
  };

  return (
    <button type="button" onClick={onLogoutHandler}>
      LogOut
    </button>
  );
};

export default Logout;
