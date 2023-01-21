import React, { useCallback } from 'react';

type PropsType = {
  user: any;
  index: number;
  isActive: boolean;
  setSelectedUser: (Index: number) => void;
  openHandler?: (e: React.MouseEvent) => void;
};

const Chat = (props: PropsType): JSX.Element => {
  const { user, index, isActive, setSelectedUser, openHandler } = props;
  console.log(isActive, index);
  // const handleOnClick = useCallback(() => {
  //   setSelectedUser(index);
  // }, [setSelectedUser, index]);

  return (
    <div
      className='pl-20 border-b p-2 border-gray-200'
      onClick={openHandler}
    >
      <span className='w-2 px-2'>{user.displayName}</span>
      <span className='px-4'>{user.email}</span>
    </div>
  );
};
export default Chat;
