import React, { useEffect, useState } from 'react';
import ProfileCard from 'features/chatting/dialog';
import { useFirebaseStore } from '../../lib/useStore';

const UserList = (): JSX.Element => {
  const { list } = useFirebaseStore('users');
  const user = list;

  return (
    <div className='w-screen h-screen '>
      {user &&
        user.map((item: {}, index: number) => {
          return <ProfileCard key={index} user={item} />
        })}
    </div>
  );
};

export default UserList;
