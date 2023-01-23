import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from 'context/user.context';
import { useRouter } from 'next/router';
import SideBar from 'features/side-bar';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AuthContextProvider>
      <Component  {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
