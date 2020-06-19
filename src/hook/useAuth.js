import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/Firebase';
import useFirestore from '../hook/useFirestore';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const fbContext = useContext(FirebaseContext);
  const { getDocumentByUID } = useFirestore();

  useEffect(() => {
    fbContext.firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        getDocumentByUID('users', currentUser.uid).then((userExtra) =>
          console.log('useAuth -> userExtra', userExtra)
        );
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
