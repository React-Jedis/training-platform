import useFirestoreBase from './useFirestoreBase';

const useFirestoreRoles = () => {
  const { getDocumentByUID } = useFirestoreBase();
  const getAliveRolesByUserUID = (userUID) => {
    return getDocumentByUID('roles', userUID).then((result) => {
      return result.roles
        .filter((rol) => {
          const nowSeconds = new Date().getTime() / 1000;
          return (
            rol.startDate.seconds < nowSeconds &&
            rol.endDate.seconds > nowSeconds
          );
        })
        .map((rol) => rol.name);
    });
  };
  return { getAliveRolesByUserUID };
};

export default useFirestoreRoles;
