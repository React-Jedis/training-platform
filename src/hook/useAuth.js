import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/Firebase';
import useFirestoreBase from './useFirestoreBase';
import useFirestoreRoles from './useFirestoreRoles';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const fbContext = useContext(FirebaseContext);
  const { getDocumentByUID } = useFirestoreBase();
  const { getAliveRolesByUserUID } = useFirestoreRoles();

  useEffect(() => {
    fbContext.firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        getDocumentByUID('users', currentUser.uid).then((userExtra) =>
          setUser({
            name: currentUser.displayName,
            email: currentUser.email,
            ...userExtra,
          })
        );
        getAliveRolesByUserUID(currentUser.uid).then((userRoles) =>
          setRoles(userRoles)
        );
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
    roles,
  };
};

export default useAuth;
