import electron, { BrowserWindow } from 'electron';
import React from 'react';
import Login from '../pages/login';
import SingIn from '../pages/sign-in';
import Main from '../pages/main';

const Home = () => {
  return (
    <>
      {/* <Login></Login> */}
      <Main />
      {/* <SingIn></SingIn> */}
    </>
  );
};

export default Home;
