import { useAuth } from 'context/user.context';
import React from 'react';

const Profile = () => {
  const { user } = useAuth();
  
  return (
    <section>
      <span>{user.displayName}</span>
      <span>{user.email}</span>
    </section>
  );
};

export default Profile;
