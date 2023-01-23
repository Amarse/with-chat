import { UserType } from 'features/user-list';
import { Timestamp } from 'firebase/firestore';
import React, { Key, useCallback } from 'react';
import { ChannelPropsType } from 'src/types';

type PropsType = {
  lastTime: Timestamp;
  friendName: string;
  friendId: string;
  uid: string;
  message: string;
  createdAt: Timestamp;
  isRead: boolean;
  displayName: string;
  id: string;
};

const Group = (props: PropsType): JSX.Element => {
  const { user, onClick } = props;

  // const handleOnClick = useCallback(() => {
  //   setSelectedUser(index);
  // }, [setSelectedUser, index]);

  return (
    <div className='w-full  overflow-y- scroll border-b p-2 border-gray-200'>
      <div>
        <span className='px-2'>{user.displayName}</span>
        {/* <span className='px-2'>{user.email}</span> */}
      </div>
    </div>
  );
};
export default Group;
