import { useState, useEffect } from 'react';

/*
This custom hook for tracking auth state changes was inspired by the Stack Overflow
user Shubham Khatri
https://stackoverflow.com/questions/55366320/how-do-i-use-the-firebase-onauthstatechange-with-the-new-react-hooks
*/
const useFirebaseAuthentication = (firebaseAuth) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(user);
      }
    });

    unsubscribe();
  });

  return authUser;
};

export default useFirebaseAuthentication;
