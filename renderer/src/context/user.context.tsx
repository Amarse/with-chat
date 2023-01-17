// import { createContext, useContext, ReactNode } from 'react';
// import useAuthFirebase from '../lib/useAuthFirebase';

// interface ProviderProps<T> {
//   value: T;
//   children?: ReactNode | undefined;
// }

// const authContext = createContext({});

// const AuthContextProvider = ({ children }) => {
//   const auth = useAuthFirebase();

//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// };

// const useAuth = () => useContext(authContext);

// export { AuthContextProvider, useAuth };
