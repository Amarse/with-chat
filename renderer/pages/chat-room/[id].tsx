import { useEffect } from 'react';
import { auth, dbService } from 'Fbase';
import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';
import Private from '../../src/features/channel/private';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const ChatRoom = (props) => {
  console.log('안넘어온다?',props);
  const router = useRouter();
  const { id, displayName } = router.query;
  console.log('이건 왜',id, displayName);
  const { user } = useAuth();

  return <>{user && <Private id={id} displayName={displayName} user={user} />}</>;
};

export default ChatRoom;
