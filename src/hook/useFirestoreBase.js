// Firebase App (the core Firebase SDK) is always required and must be listed first
import { useContext } from 'react';
import * as R from 'ramda';
import FirebaseContext from '../context/Firebase';

const useFirestoreBase = () => {
  const { firebase } = useContext(FirebaseContext);
  const getDocumentByUID = R.curry((collectionName, docUID) => {
    const docRef = firebase.firestore().collection(collectionName);
    return docRef
      .doc(docUID)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        console.log('useFirestoreBase -> snapshot.data', snapshot.data());
        return snapshot.data();
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  });

  const createDocument = R.curry((collectionName, uid, data) => {
    return firebase
      .firestore()
      .collection(collectionName)
      .doc(uid)
      .set(data)
      .then(function () {
        console.log(`${collectionName} written`);
      })
      .catch(function (error) {
        console.error(`Error adding document: ', ${error}`);
      });
  });
  return { getDocumentByUID, createDocument };
};

export default useFirestoreBase;
