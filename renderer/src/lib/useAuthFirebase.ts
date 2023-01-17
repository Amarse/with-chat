// import { useState, useEffect } from 'react';
// import { IUser } from '../types/index.js';
// import {
//   auth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut,
//   firebaseInstance,
// } from '../Fbase';

// const formatAuthUser = (user: IUser) => ({
//   uid: user.uid,
//   email: user.email,
//   password: user.password,
// });

// const useAuthFirebase = () => {
//   const [user, setUser] = useState<IUser>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   const authStateChanged = async (state: {}) => {
//     if (!state) {
//       setUser(null);
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     let fomatUser = formatAuthUser;
//     setUser(fomatUser);
//     setIsLoading(false);
//   };

//   const clear = () => {
//     setUser(null);
//     setIsLoading(true);
//   };

//   const EmailAndPassword = (auth, email: string, password: string) => {
//     signInWithEmailAndPassword(auth, email, password);
//   };

//   const createUserWithEmailAndPassword = (email: string, password: string) => {
//     createUserWithEmailAndPassword(email, password);
//   };

//   const signOut = () => {
//     signOut().then(clear);
//   };

//   useEffect(() => {
//     const unsubscribe = firebaseInstance
//       .auth()
//       .onAuthStateChanged(authStateChanged);
//     return () => unsubscribe();
//   });

//   return {
//     user,
//     isLoading,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     signOut,
//   };
// };

// export default useAuthFirebase;
