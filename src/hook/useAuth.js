import { useState, useEffect, useContext } from 'react';

import FirebaseContext from '../context/Firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const fbContext = useContext(FirebaseContext);

  useEffect(() => {
    fbContext.firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // useReducer
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
        });
        console.log(user);
      } else {
        // No user is signed in.
        console.log(':)');
        setUser(null);
      }
    });
  }, []);

  return {
    user,
  };
};

export default useAuth;
