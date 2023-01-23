import { useAuth } from 'context/user.context';
import React, { useState, useRef, useEffect } from 'react';
import { useGetChatRooms, useMessage } from 'src/hooks/useChannel';
import Message from '../message';

import { useGetMessages } from '../../../hooks/useChannel';
import { useRouter } from 'next/router';
import { UserData } from 'src/types';
import { ChannelPropsType } from 'src/types';

const Private = (props: ChannelPropsType): JSX.Element => {
  const { id, displayName, currentUser, friendName } = props;
  const router = useRouter();
  const { addMessage } = useMessage(id);
  const messagesRef = useGetMessages(id);
  const messages = messagesRef.documents;

  const [newMessage, setNewMessage] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const bottomListRef = useRef<HTMLInputElement>(null);

  const onChange = (e) => {
    setNewMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('dd', e);
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      addMessage({
        displayName: currentUser.displayName,
        message: trimmedMessage,
        id: currentUser.id,
        uid: id,
        roomId: id,
        friendName: displayName,
      });
      setNewMessage('');
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    if (bottomListRef.current) {
      console.log(bottomListRef);
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main>
      <div>
        <div className='w-full fixed top-0 bg-gray-100 text-center h-20 header'>
          <button
            onClick={() => router.push('/main')}
            className='absolute left-3 top-7'
          >
            <img
              src='/assets/images/back-button.svg'
              className='text-gray-900'
            />
          </button>
          {id ? (
            <span className='font-bold text-lg'>{displayName}</span>
          ) : (
            <span className='font-bold text-lg'>{currentUser.displayName}</span>
          )}
        </div>
        <div>
          <ul className='pb-20 pt-20'>
            {messages
              ?.sort((first, second) =>
                first?.createdAt?.seconds <= second?.createdAt?.seconds ? -1 : 1
              )
              ?.map((message) => (
                <li key={message.id}>
                  <Message {...message} />
                </li>
              ))}
          </ul>
          <div ref={bottomListRef} className='mb-16' />
        </div>
      </div>

      {/* 채팅 입력 폼 생성 */}
      <div className='fixed bottom-0 border border-t-gray-200 bg-white w-full'>
        <form onSubmit={onSubmit} className='flex'>
          <input
            ref={inputRef}
            type='text'
            value={newMessage}
            onChange={onChange}
            placeholder='메세지를 입력하세요'
            className='px-4 h-20 flex-1 mr-1 ml-1 focus:none '
          />
          <button
            type='submit'
            disabled={!newMessage}
            className='uppercase w-20 font-semibold text-sm tracking-wider  bg-white text-gray-500 hover:text-gray-900 transition-colors'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Private;
