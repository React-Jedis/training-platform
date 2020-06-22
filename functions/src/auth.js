const { createDocument, deleteDocument } = require('./firestore');

// auth trigger (new user signup)
exports.newUserSignup = (user) => {
  console.log('user created', user.email, user.uid);

  const newUser = {
    displayName: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  };

  if (user.providerId === 'google.com') {
    newUser['name'] = user.profile.given_name;
    newUser['surName'] = user.profile.family_name;
    newUser['locale'] = user.profile.locale;
  }

  return createDocument('users', user.uid, newUser);
};

// auth trigger (user deleted)
exports.userDeleted = (user) => {
  console.log('user deleted', user.email, user.uid);
  return deleteDocument('users', user.uid);
};
