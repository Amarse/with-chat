import electron ,{BrowserWindow }from "electron";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useDocuments } from 'src/hooks/useDouments';
import { useCollection } from '../../hooks/useCollection';
import Group from './group';

const GroupList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  const [selectedUser, setSelectedIndex] = useState(null);
console.log(list)
  
  // const ipcRenderer = electron.ipcRenderer;

  // const openWindow = () => {
  //   ipcRenderer.send("show-channel");
  // };

  const onClick = (e) => {
    console.log(selectedUser);
    selectedUser(e.currentTarget.value);
  };
  return (
    <main className='fit-content'>
      <h2 className='p-4 w-full  border-b  border-gray-200 '>그룹</h2>
      {list &&
        list.map((user: {}, index: number) => {
          return (
            <Group
              user={user}
              index={index}
              isActive={index === selectedUser}
              key={index}
              // openHandler={openWindow}
              setSelectedUser={setSelectedIndex}
            />
          );
        })}
    </main>
  );
};

export default GroupList;