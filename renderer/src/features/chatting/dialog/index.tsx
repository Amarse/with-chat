import Profile from 'features/profile';
import React from 'react';

const ProfileCard = (props) : JSX.Element => {
  const { user } = props;
  console.log(user);
  return (
    <article className='flex flex-col'>
      <span className=''>{user.displayName}</span>
      <span>{user.email}</span>
    </article>
  );
};

export default ProfileCard;
