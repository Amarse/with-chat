import React, { useCallback } from 'react';

type PropsType = {
  user: any;
  index: number;
  isActive: boolean;
  setSelectedUser: (Index: number) => void;
  onClick?: (index: number) => void;
};

const User = (props: PropsType): JSX.Element => {
  const { user, index, isActive, setSelectedUser } = props;
  console.log(isActive, index);
  const handleOnClick = useCallback(() => {
    setSelectedUser(index);
  }, [setSelectedUser, index]);

  return (
    <aside
      onClick={handleOnClick}
      className={`w-full  border-b p-2 border-gray-200 ${
        isActive ? '' : 'mr-2'
      }`}
    >
      <div className={` ${isActive ? 'mr-2' : '' }`}>
        <span className='px-2'>{user.displayName}</span>
        <span className='px-2'>{user.email}</span>
      </div>
    </aside>
  );
};
export default User;
