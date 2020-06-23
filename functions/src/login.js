const { getDocumentByUID } = require('./firestore');

// auth trigger (new user signup)
exports.loadUserByUID = (uid) => {
  console.log('Loading user', uid);

  return getDocumentByUID('users', uid)
    .then((user) => {
      console.log('exports.loadUserByUID -> user', user);
      const responseUser = {
        ...user,
      };
      responseUser.roles = user.roles
        .filter((rol) => {
          const nowSeconds = new Date().getTime() / 1000;
          return (
            rol.startDate.seconds < nowSeconds &&
            rol.endDate.seconds > nowSeconds
          );
        })
        .map((rol) => rol.name);

      return responseUser;
    })
    .catch((e) => console.log(e));
};
