import { useAuth } from "context/user.context";

type PropsType = {
  onClick: (e: React.MouseEvent) => void;
};

const Profile = (props: PropsType): JSX.Element => {
  const { currentUser } = useAuth();
  const { onClick } = props;
//  
  return (
    <div
      className='flex mt-4 mb-2  border-gray-200 cursor-pointer hover:bg-gray-200'
      onClick={onClick}
    >
      <div className='item flex justify-center'>
        <img src='/assets/images/yellow-circle.png' alt='user' className='w-10 h-10' />
      </div>
      <div className='flex flex-col ml-2'>
        <span className='px-2 font-semibold'>{currentUser.displayName}</span>
        <span className='px-2 font-semibold'>{currentUser.email}</span>
      </div>
    </div>
  );
};
export default Profile;
