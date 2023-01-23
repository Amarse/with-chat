import React from 'react';
import { useRouter } from 'next/router';
import { useCollection } from '../../hooks/useUserList';
import User from './user';
import { Timestamp } from 'firebase/firestore';
import { useAuth } from 'context/user.context';
import Profile from 'features/profile';

export type UserType = {
  [x: string]: any;
  createdTime?: Timestamp;
  email: string;
  displayName: string;
  id?: string | number;
};

const UserList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  const { currentUser } = useAuth();
  const userInfo = list.filter(function (item, idx, self) {
    return self.indexOf(item) == idx;
  });
  console.log(userInfo);
  const onClick = (e) => {
    const { id, displayName } = e;
    if (id !== currentUser.id) {
      router.push(
        {
          pathname: '/group-room/[id]',
          query: { id: id, displayName: displayName, currentUser: currentUser },
        },
        '/group-room/[id]'
      );
    }
  };

  return (
    <main>
      <div className='border-b pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold'>친구</h2>
        <Profile onClick={onClick} />
      </div>
      <div className='overflow-y-auto w-full pt-40'>
        {list &&
          list.map((user: UserType, index: number) => {
            if (user.email !== currentUser.email) {
              return (
                <User
                  user={user}
                  index={index}
                  key={user.id}
                  onClick={() => onClick(user)}
                />
              );
            }
          })}
      </div>
    </main>
  );
};

export default UserList;
