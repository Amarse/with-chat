import { useEffect } from 'react';
import { auth, dbService } from 'Fbase';
import Channel from 'features/channel';
import { useRouter } from 'next/router';
import { useAuth } from 'context/user.context';
import Private from '../../../src/features/channel/private';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

const ChatPage = ({ messageProps }) => {
  const router = useRouter();
  const { id } = messageProps;
  console.log(id);
  // const { id } = router.query;
  const { user } = useAuth();

  //   useEffect(() => {
  //     if(!router.isReady) return;
  //     console.log(id,'🙆‍♀️ 콘솔에 쿼리 찍힘!')
  //  }, [router.isReady])

  return <>
  {user && <Private user={messageProps} id={id} />}</>;
};

export default ChatPage;

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(dbService, 'messages'));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const docRef = doc(dbService, 'messages', id);
  const docSnap = await getDoc(docRef);
  return {
    props: { messageProps: JSON.stringify(docSnap.data()) || null },
  };
};
