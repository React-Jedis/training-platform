import React, { useContext } from 'react';

import FirebaseContext from '../../context/Firebase';

const Logout = () => {
  const fbContext = useContext(FirebaseContext);

  const onLogoutHandler = () => {
    fbContext.firebase
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
