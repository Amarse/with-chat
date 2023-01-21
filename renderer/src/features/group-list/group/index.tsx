import React, { useCallback } from 'react';

type PropsType = {
  user: any;
  index: number;
  isActive: boolean;
  setSelectedUser: (Index: number) => void;
  openHandler?: (e: React.MouseEvent) => void;
};

const Group = (props: PropsType): JSX.Element => {
  const { user, index, isActive, setSelectedUser , openHandler} = props;
  console.log(isActive, index);
  // const handleOnClick = useCallback(() => {
  //   setSelectedUser(index);
  // }, [setSelectedUser, index]);

  return (
    <aside
      
      className={`w-full  overflow-y- scroll border-b p-2 border-gray-200 ${
        isActive ? '' : 'mr-2'
      }`}
    >
      <div className={` ${isActive ? 'bg-gray-300' : '' }`} onClick={openHandler}>
        <span className='px-2'>{user.displayName}</span>
        <span className='px-2'>{user.email}</span>
      </div>
    </aside>
  );
};
export default Group;
