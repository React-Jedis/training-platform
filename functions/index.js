const { functions } = require('./src/admin');
// const serviceAccount = require('./admin.json');
const { newUserSignup, userDeleted } = require('./src/auth');
const { getDocumentByUID } = require('./src/firestore');
const { loadUserByUID } = require('./src/login');

const REGION = 'europe-west3';

module.exports = {
  newUserSignup: functions.region(REGION).auth.user().onCreate(newUserSignup),
  userDeleted: functions.region(REGION).auth.user().onDelete(userDeleted),
  getDocumentByUID: functions.region(REGION).https.onCall((data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Only authenticated users can add requests'
      );
    }

    const { collectionName, docUID } = data;
    return getDocumentByUID(collectionName, docUID);
  }),
  loadUserByUID: functions.region(REGION).https.onCall((data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Only authenticated users can add requests'
      );
    }
    const { userUID } = data;
    return loadUserByUID(userUID);
  }),
};
