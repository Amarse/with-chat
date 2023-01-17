import React from 'react';
import { useAuth } from 'context/user.context';
const Private = () => {
  const { user } = useAuth();
  console.log( user)
  return <div className='w-screen h-screen'>
   <h2 className='p-4'>1:1 채팅</h2>
   <span>{user.displayName}</span>
  </div>;
};

export default Private;
