import React from 'react';
import { useRouter } from 'next/router';
import { AppLayout, NavLayout } from 'src/layout';
import type { ReactElement } from 'react';
import SideBar from 'features/side-bar';

const Main = () => {
  return (
    <div className='h-full'>
      <SideBar />
    </div>
  );
};

export default Main;

Main.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <NavLayout>{page}</NavLayout>
    </AppLayout>
  );
};
