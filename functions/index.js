const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./admin.json');
const moment = require('moment');
const axios = require('axios');
const cors = require('cors')({ origin: true });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pl-training-platform.firebaseio.com/',
});

const formDate = (date) => moment(date.toDate()).format('DD-MM-YYYY HH:mm:ss');

exports.createUser = functions.https.onRequest(async (request, response) => {
  cors(request, response, () => {
    const user = request.query;
  });
});
