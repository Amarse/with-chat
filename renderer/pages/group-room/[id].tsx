import { useEffect } from 'react';
import { auth, dbService } from 'Fbase';
import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';
import Group from '../../src/features/channel/group';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const GroupRoom = () => {
  const router = useRouter();
  const { id, displayName } = router.query;
  console.log('이건 왜',id, displayName);
  const { currentUser } = useAuth();

  return <>{currentUser && <Group id={id} displayName={displayName} currentUser={currentUser} />}</>;
};

export default GroupRoom;
