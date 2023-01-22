import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { dbService, timeStamp, auth, collection } from 'Fbase.js';
import { useCollection } from './useUserList';

export const usePrivate = (transaction: any) => {
  const { list } = useCollection('users');
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    list.forEach(async (item) => {
      const q = collection(dbService, `${transaction}-${item.id}`);
      const data = getDocs(q);
      console.log(q.id);
      console.log(data);

      // setChatList(chatId);
    });
  }, [collection]);

  return { chatList };
};
