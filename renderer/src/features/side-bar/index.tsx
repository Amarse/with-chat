import React from 'react';

import Navs from './nav/navs';
import Nav from './nav/nav';
import Private from 'features/channel/private';
import Group from 'features/channel/group';
import { useAuth } from 'context/user.context';
import { useRouter } from 'next/router';
import UserList from 'features/user-list';

const SideBar = (): JSX.Element => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const logedout = () => {
    console.log('ee');
    logout();
    router.push('/login');
  };

  return (
    <>
      <div className='relative'>
        <Navs>
          <Nav title='user'>
            <UserList /> 
          </Nav>
          <Nav title='private'>
            <Private user={user}/>
          </Nav>
          <Nav title='group'>
            <Group />
          </Nav>
        </Navs>
      </div>
      <button onClick={logedout} className='absolute'>
        로그아웃</button>
    </>
  );
};

export default SideBar;
