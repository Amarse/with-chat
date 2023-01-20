import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useDocuments } from 'src/hooks/useDouments';
import { useCollection } from '../../hooks/useCollection';
import User from './user';

const UserList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  const [selectedUser, setSelectedIndex] = useState(null);

  const onClick = (e) => {
    console.log(selectedUser);
    selectedUser(e.currentTarget.value);
  };
  return (
    <main className='h-screen  fit-content'>
      <h2 className='p-4 w-full  border-b  border-gray-200 '>유저 목록</h2>
      {list &&
        list.map((user: {}, index: number) => {
          return (
            <User
              user={user}
              index={index}
              isActive={index === selectedUser}
              key={index}
              setSelectedUser={setSelectedIndex}
            />
          );
        })}
    </main>
  );
};

export default UserList;
