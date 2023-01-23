import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Timestamp } from 'firebase/firestore';
import Chat from './chat';
import { usePrivate } from 'src/hooks/usePrivate';
import { useAuth } from 'context/user.context';
import { useGetChatRooms, useGetMessages } from 'src/hooks/useChannel';
import { useCollection } from 'src/hooks/useUserList';

export type ChatPropsType = {
  lastTime?: Timestamp;
  friendName?: string;
  uid?: string;
  message?: string;
  displayName?: string;
  id?: string;
  roomId?: string;
};
const ChatList = (): JSX.Element => {
  const router = useRouter();
  const { chatRooms } = useGetChatRooms();
  console.log(chatRooms);

  // const messagesRef = useGetMessages('chatRoom', `messages-${id}`);
  const onClick = (e) => {
    const { id, displayName, friendId } = e;
    router.push({
      pathname: '/chat-room/[id]',
      query: { id: id, displayName: displayName, friendId: friendId },
    });
  };

  return (
    <main>
      <div className='pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold'>1:1</h2>
      </div>
      <div className='overflow-y-auto w-full pt-20'>
        {chatRooms &&
          chatRooms.map((user: ChatPropsType, index: number) => {
            return (
              <Chat
                user={user}
                index={index}
                key={user.id}
                onClick={() => onClick(user)}
              />
            );
          })}
      </div>
    </main>
  );
};

export default ChatList;
