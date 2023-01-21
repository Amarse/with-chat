import React from 'react';
import type { ReactElement } from 'react';
import { AppLayout, NavLayout } from '../../layout';
import Navs from './nav/navs';
import Nav from './nav/nav';

import UserList from 'features/user-list';
import ChatList from 'features/chat-list';
import GroupList from 'features/group-list';
import type { NextPageWithLayout } from '../../../pages/_app';

const SideBar: NextPageWithLayout = (): JSX.Element => {
  return (
    <Navs>
      <Nav title='user'>
        <UserList />
      </Nav>
      <Nav title='private'>
        <ChatList />
      </Nav>
      <Nav title='group'>
        <GroupList />
      </Nav>
    </Navs>
  );
};

export default SideBar;
