import React from 'react';
import { useAuth } from 'context/user.context';
import { formatDate } from '../helper/index';

const Message = (props): JSX.Element => {
  const {
    createdAt = null,
    uid = '',
    message = '',
    displayName = '',
    photoURL = '',
    isRead = false,
  } = props;
  console.log('ddd', uid);
  const { user } = useAuth();
  // console.log(user.id);

  // 채팅 내용 없으면 보여주지 않음
  if (!message) return null;

  return (
    <>
      <div
        className={`flex items-start flex-wrap p-4 ${
          uid === user?.id && 'flex-row-reverse'
        }`}
      >
        {user?.id !== uid && (
          <>
            <div className={`w-10 ${uid === user?.id ? '' : 'mr-2'}`}>
              <img
                src='/assets/images/circle.png'
                alt='Avatar'
                className='rounded-full mr-4 h-10 w-10'
                width={45}
                height={45}
              />
            </div>
          </>
        )}
        <div
          className={`p-2 rounded-lg  ${
            uid === user.id ? 'bg-rose-400 text-white ' : 'bg-gray-300'
          }`}
        >
          {message}
        </div>
        <div className='text-gray-400 text-xs mx-2 flex flex-col'>
          {createdAt?.seconds ? (
            <span
              className={`text-gray-500 text-xs ${
                uid === user?.id && 'flex-row-reverse'
              }`}
            >
              {isRead === false && uid === user.id && (
                <div className='text-right text-xs text-red-400'>1</div>
              )}
              {formatDate(new Date(createdAt.seconds * 1000))}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Message;
