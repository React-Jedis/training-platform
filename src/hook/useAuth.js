import { useState, useEffect } from 'react';
import useFirebase from './useFirebase';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const firebase = useFirebase();

  useEffect(() => {
    if (!firebase) return;
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        console.log('[currentUser]', currentUser);
        firebase
          .functions('europe-west3')
          .httpsCallable('getDocumentByUID')({
            collectionName: 'users',
            docUID: currentUser.uid,
          })
          .then((docData) => {
            console.log('[dbUser]', docData.data);
            setUser(docData.data);
          });
      } else {
        console.log(':)');
        setUser(null);
      }
    });
  }, [firebase]);

  return {
    user,
    roles,
  };
};

export default useAuth;
