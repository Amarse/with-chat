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

import { auth } from 'Fbase';

interface UserProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('dd', auth.currentUser.uid);
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
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

  const signin = async (
    name: string,
    email: string,
    password: string,
  ) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: name,
      // profile: photo,
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

  return (
    <AuthContext.Provider value={{ user, login, signin, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
