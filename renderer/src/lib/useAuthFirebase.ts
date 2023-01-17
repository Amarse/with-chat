// import { useState, useEffect } from 'react';
// import { auth, firebaseInstance } from 'Fbase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useRouter } from 'next/router';
// import {
//   removeUserCookie,
//   setUserCookie,
//   getUserFromCookie,
// } from './userCookie';

// // const login = (email: string, password: string) => {
// //   console.log('dddd', email, password);

// //   setErr(null);

// //   signInWithEmailAndPassword(auth, email, password)
// //     .then((credential) => {
// //       const user = credential.user;
// //       console.log(user);
// //       if (!user) {
// //         throw new Error('회원가입에 실패했습니다.');
// //       }
// //       router.push('/main');
// //     })
// //     .catch((err) => {
// //       setErr(err.message);
// //     });
// // };

// export const mapUserData = async (user) => {
//   const { uid, email } = user;
//   const token = await user.getIdToken(true);
//   return {
//     id: uid,
//     email,
//     token,
//   };
// };

// const useUser = () => {
//   const [user, setUser] = useState<string | null>(null);
//   const router = useRouter();

//   const logout = async () => {
//     return auth
//       .signOut()
//       .then(() => {
//         router.push('/');
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   };

//   useEffect(() => {
//     const cancel = auth.onIdTokenChanged(async (userToken) => {
//       if (userToken) {
//         const userData = await mapUserData(userToken);
//         setUserCookie(userData);
//         setUser(userData);
//       } else {
//         removeUserCookie();
//         setUser(null);
//       }
//     });
//     const userFormCookie = getUserFromCookie();
//     if(!userFormCookie){
//       return;
//     } 
//     setUser(userFormCookie);
//     return () => cancel;
//   }, []);



//     const userFromCookie = getUserFromCookie();
//     if (!userFromCookie) {
//       return;
//     }
//     setUser(userFromCookie);
//     return () => cancelAuthListener;
//   }, []);

//   return { user, logout };
// };

// export { useUser };
