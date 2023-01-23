import electron, { BrowserWindow } from 'electron';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useDocuments } from 'src/hooks/useDouments';
import { useCollection } from '../../hooks/useUserList';
import Group from './group';
import { useAuth } from 'context/user.context';
import { ChannelPropsType } from 'src/types';

const GroupList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  const { currentUser } = useAuth();
  const [selectedUser, setSelectedIndex] = useState(null);
  console.log(list);

  const onClick = (e) => {
    selectedUser(e.currentTarget.value);
    const { id, displayName } = e;
    router.push(
      {
        pathname: '/group-room/[id]',
        query: { id: id, displayName: displayName, currentUser: currentUser },
      },
      '/group-room/[id]'
    );
  };
  return (
    <main className='fit-content'>
      <div className='pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold'>그룹 채팅</h2>
      </div>
      {list &&
        list.map((user: ChannelPropsType, index: number) => {
          return (
            <Group
              user={user}
              index={index}
              key={user.id}
              onClick={() => onClick(user)}
            />
          );
        })}
    </main>
  );
};

export default GroupList;
