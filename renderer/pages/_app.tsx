import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useAuth } from 'context/user.context';
import Login from 'features/login';
import { AuthContextProvider } from 'context/user.context';
import SingIn from './sign-in';

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useAuth();
  return (
    <div>
      {!user ? (
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default MyApp;
