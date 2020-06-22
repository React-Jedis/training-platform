import { useEffect, useState } from 'react';
import getFirebase from '../components/firebase';

const useFirebase = () => {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    setInstance(getFirebase());
  }, []);

  return instance;
};

export default useFirebase;
