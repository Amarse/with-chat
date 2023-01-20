import { useAuth } from 'context/user.context';
import React, { useState, useRef, useEffect } from 'react';
import { useChannel, useMessage } from 'src/hooks/useChannel';
import Message from '../message';
import { collection, orderBy, query, limit, where } from 'firebase/firestore';
import { dbService } from 'Fbase';
import { ref } from 'firebase/storage';
import { useGetMessages } from '../../../hooks/useChannel';

type ChannelPropsType = {
  user: {
    uid: string;
    displayName: string;
  };
};
const Private = ({ id = null, user = null }): JSX.Element => {
  const { addMessage } = useMessage('messages');
  const messagesRef = useGetMessages('messages', id);

  const messages = messagesRef.documents;
  console.log(messages)

  const { uid, displayName } = user;

  console.log(messages);

  const [newMessage, setNewMessage] = useState('');
  console.log(newMessage);

  const inputRef = useRef<HTMLInputElement>(null);

  const bottomListRef = useRef<HTMLInputElement>(null);

  const onChange = (e) => {
    setNewMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      addMessage({
        displayName: user.displayName,
        message: trimmedMessage,
        uid: user.id,
        isRead: false,
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
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main>
      <div className='flex flex-col h-full relative'>
        <div className='overflow-auto h-full static'>
          <div className='py-4 max-w-screen-lg mx-auto'>
            <ul>
              {messages
                ?.sort((first, second) =>
                  first?.createdAt?.seconds <= second?.createdAt?.seconds
                    ? -1
                    : 1
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
      </div>

      {/* 채팅 입력 폼 생성 */}
      <div className='z-20 pb-safe bottom-0 fixed w-auto md:max-w-xl p-4 bg-gray-50'>
        <form onSubmit={onSubmit} className='flex'>
          <input
            ref={inputRef}
            type='text'
            value={newMessage}
            onChange={onChange}
            placeholder='메세지를 입력하세요'
            className='border rounded-full px-4 h-10 flex-1 mr-1 ml-1'
          />
          <button
            type='submit'
            disabled={!newMessage}
            className='uppercase font-semibold text-sm tracking-wider text-gray-500 hover:text-gray-900 transition-colors'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Private;
