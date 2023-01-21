import React from 'react';
import { useRouter } from 'next/router';
import { useCollection } from '../../hooks/useCollection';
import User from './user';
import { Timestamp } from 'firebase/firestore';

export type UserType = {
  createdTime?: Timestamp;
  email: string;
  displayName: string;
  id?: string | number;
};

const UserList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  console.log(list)

  const onClick = (e) => {
    const {id, displayName } = e;
    router.push({ pathname: '/chat-room/[id]', query: { id: id, displayName: displayName } });
  };

  return (
    <main>
      <div className='pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold'>친구</h2>
      </div>
      <div className='overflow-y-auto w-full'>
        {list &&
          list.map((user: UserType, index: number) => {
            return (
              <User
                user={user}
                index={index}
                key={user.id}
                onClick={() => onClick(user)}
              />
            );
          })}
      </div>
    </main>
  );
};

export default UserList;
