import './src/css/style.css';
import './src/css/global.css';

import React from 'react';
import Firebase from './src/context/Firebase';
import firebase from './src/components/firebase';

// Wraps every page in a component
export const wrapRootElement = ({ element, props }) => {
  return (
    <Firebase.Provider {...props} value={{ firebase }}>
      {element}
    </Firebase.Provider>
  );
};
