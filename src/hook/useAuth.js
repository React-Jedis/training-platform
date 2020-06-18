import { useState, useEffect, useContext } from 'react';

import FirebaseContext from '../context/Firebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const fbContext = useContext(FirebaseContext);

  useEffect(() => {
    fbContext.firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        console.log('useAuth -> currentUser', currentUser);

        let usersRef = fbContext.firebase.firestore().collection('users');
        usersRef
          .doc(currentUser.uid)
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }
            console.log('useAuth -> snapshot', snapshot.data());
          })
          .catch((err) => {
            console.log('Error getting documents', err);
          });

        // useReducer
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
        });
        console.log('[user]', currentUser);
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
