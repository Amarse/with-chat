import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useAuth } from 'context/user.context';
import Login from 'features/login';
import { AuthContextProvider } from 'context/user.context';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queries = router.query; // 전달받은 쿼리 내용
  console.log(queries);
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   console.log(queries);
  // }, [router.isReady]);

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
