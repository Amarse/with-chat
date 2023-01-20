import { useEffect } from 'react';
import { auth } from 'Fbase';
import Channel from 'features/channel';
import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';
import Private from '../../src/features/channel/private';

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    if(!router.isReady) return;
    console.log(id,'🙆‍♀️ 콘솔에 쿼리 찍힘!')
 }, [router.isReady])

  return <>{user && <Private  />}</>;
};

export default ChatPage;
