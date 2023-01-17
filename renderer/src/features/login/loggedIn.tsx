// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAuth } from '../../context/user.context';
// import Main from '../../pages/main';

// const LoggedIn = () => {
//   const { user, isLoading } = useAuth();

//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && !user) {
//       router.push('/');
//     }
//   }, [user, isLoading]);

//   return <div><Main /></div>;
// };

// export default LoggedIn;
