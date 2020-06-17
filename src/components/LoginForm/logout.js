import React, { useContext } from 'react';

import FirebaseContext from '../../context/Firebase';

const Logout = () => {
  const { firebase } = useContext(FirebaseContext);

  const onLogoutHandler = () => {
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
