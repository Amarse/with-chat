import electron, { BrowserWindow } from 'electron';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useDocuments } from 'src/hooks/useDouments';
import { useCollection } from '../../hooks/useCollection';
import User from './chat';

const ChatList = (): JSX.Element => {
  const { list } = useCollection('users');
  const router = useRouter();
  const [selectedUser, setSelectedIndex] = useState(null);
  console.log(list);

  // const ipcRenderer = electron.ipcRenderer;

  // const openWindow = () => {
  //   ipcRenderer.send("show-channel");
  // };

  const onClick = (e) => {
    console.log(selectedUser);
    selectedUser(e.currentTarget.value);
  };
  return (
    <main>
      <div className='pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold' >채팅</h2>
      </div>
      <div className='overflow-y-auto w-full'>
        {list &&
          list.map((user: {}, index: number) => {
            return (
              <User
                user={user}
                index={index}
                isActive={index === selectedUser}
                key={index}
                // openHandler={openWindow}
                setSelectedUser={setSelectedIndex}
              />
            );
          })}
      </div>
    </main>
  );
};

export default ChatList;
