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
    lastTime = null,
    isRead = false,
  } = props;
  const { currentUser } = useAuth();
  if (!message) return null;
  return (
    <div
      className={`flex items-start flex-wrap p-4 ${
        uid !== currentUser?.id && 'flex-row-reverse'
      }`}
    >
      {currentUser?.id === uid && (
        <>
          <div className={`w-10 ${uid !== currentUser?.id ? '' : 'mr-2'}`}>
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
        className={`p-2 rounded-lg text-sm fit-contents  ${
          uid !== currentUser.id ? 'bg-rose-400 text-white ' : 'bg-gray-300'
        }`}
      >
        {message}
      </div>
      <div className='text-gray-400 text-xs mx-2 flex flex-col'>
        {createdAt?.seconds ? (
          <span
            className={`text-gray-500 text-xs ${
              uid === currentUser?.id && 'flex-row-reverse'
            }`}
          >
            {/* {isRead === false && uid === user.id && (run 
                <div className='text-right text-xxs text-rose-400'>1</div>
              )} */}
            {formatDate(new Date(createdAt.seconds * 1000))}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
