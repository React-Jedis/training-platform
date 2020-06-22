const { firestore } = require('./admin');

exports.getDocumentByUID = (collectionName, docUID) => {
  const docRef = firestore.collection(collectionName);

  return docRef
    .doc(docUID)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return false;
      }
      console.log('useFirestoreBase -> snapshot.data', snapshot.data());
      return snapshot.data();
    })
    .catch((err) => {
      console.log('Error getting documents', err);
      return false;
    });
};

exports.createDocument = (collectionName, uid, data) =>
  firestore.collection(collectionName).doc(uid).set(data);

exports.deleteDocument = (collectionName, uid) =>
  firestore.collection(collectionName).doc(uid).detele();
