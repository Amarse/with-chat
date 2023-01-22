import { useAuth } from 'context/user.context';
import React, { useState, useRef, useEffect } from 'react';
import { useChannel, useMessage } from 'src/hooks/useChannel';
import Message from '../message';
import { collection, orderBy, query, limit, where } from 'firebase/firestore';
import { dbService } from 'Fbase';
import { ref } from 'firebase/storage';
import { useGetMessages } from '../../../hooks/useChannel';
// import { useGetMessage } from '../../../hooks/usePrivate';
import { useRouter } from 'next/router';

type ChannelPropsType = {
  user: {
    uid: string;
    displayName: string;
  };
};
const Private = ({
  id = null,
  displayName = null,
  currentUser = null,
}): JSX.Element => {
  console.log(currentUser.id);
  console.log(id, displayName);

  const router = useRouter();
  const { addMessage } = useMessage('chatRoom',  `messages-${id}`);
  const messagesRef = useGetMessages('chatRoom', `messages-${id}`);
  console.log(messagesRef);

  const messages = messagesRef.documents;

  console.log('ehzb', messages);
  const [newMessage, setNewMessage] = useState('');

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
        displayName: currentUser.displayName,
        message: trimmedMessage,
        uid: currentUser.id,
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
      console.log(bottomListRef);
      bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main>
      <div>
        <div>
          <div>채 팅</div>
          <button onClick={() => router.push('/main')}>뒤로가기</button>
          <div>
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
      <div className='fixed bottom-0 w-full'>
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
