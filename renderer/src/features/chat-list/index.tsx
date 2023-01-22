import React from 'react';
import { useRouter } from 'next/router';
import { Timestamp } from 'firebase/firestore';
import Chat from './chat';
import { usePrivate } from 'src/hooks/usePrivate';
import { useAuth } from 'context/user.context';
import { useGetChatRooms, useGetMessages } from 'src/hooks/useChannel';
import { useCollection } from 'src/hooks/useUserList';

export type UserType = {
  createdTime?: Timestamp;
  email: string;
  displayName: string;
  id?: string | number;
};

const ChatList = (): JSX.Element => {
  const router = useRouter();
  const { id, displayName } = router.query;
  const { list } = useCollection('users');
  const { currentUser } = useAuth();
  const { chatRooms } = useGetChatRooms();
  // const messagesRef = useGetMessages('chatRoom', `messages-${id}`);
  console.log('chatRooms', chatRooms);
  const onClick = (e) => {
    const { id, displayName } = e;
    router.push({
      pathname: '/chat-room/[id]',
      query: { id: id, displayName: displayName },
    });
  };

  return (
    <main>
      <div className='pl-20 py-4 w-full bg-gray-100 fixed top-0'>
        <h2 className='text-lg font-bold'>1:1</h2>
      </div>
      <div className='overflow-y-auto w-full'>
        {chatRooms &&
          chatRooms.map((user: UserType, index: number) => {
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
