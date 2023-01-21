import { UserType } from '../index';

type PropsType = {
  user: UserType;
  index: number;
  onClick: (e: React.MouseEvent) => void;
};

const Chat = (props: PropsType): JSX.Element => {
  const { user, onClick } = props;
//  
  return (
    <div
      className='flex pl-20 border-b p-2 border-gray-200 cursor-pointer hover:bg-gray-200'
      onClick={onClick}
    >
      <div className='item flex justify-center'>
        <img src='/assets/images/circle.png' alt='user' className='w-10 h-10' />
      </div>
      <div className='flex flex-col ml-2'>
        <span className='px-2'>{user.displayName}</span>
        <span className='px-2'>{user.email}</span>
      </div>
    </div>
  );
};
export default Chat;
