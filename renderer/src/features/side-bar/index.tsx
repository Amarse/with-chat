import React from 'react';

import Navs from './nav/navs';
import Nav from './nav/nav';
import UserList from 'features/user-list';
import Private from 'features/chatting/private';
import Group from 'features/chatting/group';
import { useAuth } from 'context/user.context';
import { useRouter } from 'next/router';

const SideBar = (): JSX.Element => {
  const { logout } = useAuth();
  const router = useRouter();

  const logedout = () => {
    console.log('ee');
    logout();
    router.push('/login');
  };

  return (
    <>
      <div>
        <Navs>
          <Nav title='user'>
            <UserList />
          </Nav>
          <Nav title='private'>
            <Private />
          </Nav>
          <Nav title='group'>
            <Group />
          </Nav>
        </Navs>
      </div>
      <button onClick={logedout}>
        로그아웃</button>
    </>
  );
};

export default SideBar;
