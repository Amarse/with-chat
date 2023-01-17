import electron, { BrowserWindow } from 'electron';
import React from 'react';
import Login from './login';
import SingIn from './sign-in';
import Main from './main';

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
