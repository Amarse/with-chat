import { formatDate } from 'features/helper';
import { useEffect } from 'react';
import { ChatPropsType } from '..';

type PropsType = {
  user: ChatPropsType;
  onClick: (e: React.MouseEvent) => void;
};

const Chat = (props): JSX.Element => {
  const { user, onClick } = props;

  
  return (
    <div
      className='flex pl-20 border-b p-2 border-gray-200 cursor-pointer hover:bg-gray-200'
      onClick={onClick}
    >
      <div className='item flex justify-center'>
        <img src='/assets/images/circle.png' alt='user' className='w-10 h-10' />
      </div>
      <div className='flex flex-col ml-2'>
        <span className='px-2'>{user.friendName}</span>
        <span className='px-2'>{user.message}</span>
        <span className='px-2'>{user.listTime}</span>
      </div>
    </div>
  );
};
export default Chat;
