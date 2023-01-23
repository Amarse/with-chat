import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';
import Private from '../../src/features/channel/private';
import { useEffect } from 'react';
import ChatList from 'features/chat-list';

const ChatRoom = () => {
  const router = useRouter();
  const { id, displayName } = router.query;
  console.log('ss', id);
  const { currentUser } = useAuth();
  if (displayName) {
    console.log(displayName);
  }

  useEffect(() => {});

  return (
    <>
      {currentUser && (
        <Private id={id} displayName={displayName} currentUser={currentUser} />
      )}
    </>
  );
};

export default ChatRoom;
