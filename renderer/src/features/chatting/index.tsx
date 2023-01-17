import React from 'react';
import Group from './group';
import Private from './private';
import { useAuth } from 'context/user.context';
import ProfileCard from './dialog';

const Chatting = () => {
  const { user } = useAuth();
  console.log(user.displayName);
  return (
    <div>
    </div>
  );
};

export default Chatting;
