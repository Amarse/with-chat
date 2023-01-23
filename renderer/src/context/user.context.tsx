import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth, dbService, storage } from 'Fbase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

interface UserProviderProps {
  children: ReactNode;
}

type signupType = {
  name: string;
  email: string;
  password: string;
};

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);


export const AuthContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [friendList, setFriendList] = useState(null);
  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          stsTokenManager: true,
        });
      } else {
        setUser({
          uid: '',
          email: '',
          displayName: '',
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signin = async (name: string, email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    return user;
  };

  const login = async (email: string, password: string) => {
    console.log();
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser({
      uid: '',
      email: '',
      displayName: '',
    });
    await signOut(auth);
  };

  const currentUser = user;

  return (
    <AuthContext.Provider value={{ currentUser, login, signin, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
