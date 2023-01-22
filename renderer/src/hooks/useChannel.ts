import {
  orderBy,
  query,
  addDoc,
  onSnapshot,
  collectionGroup,
  where,
  
} from 'firebase/firestore';
import 'firebase/firestore';

import { useEffect, useState } from 'react';
import { dbService, timeStamp, db, collection} from 'Fbase.js';
import { useRef } from 'react';
import { useCollection } from './useCollection';
export const useChannel = (transaction: any) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    onSnapshot(transaction, (querySnapshot) => {
      const item = [];
      querySnapshot.docs.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setDocs(item);
    });
  }, [collection]);

  return { docs };
  // 데이터 조회
};

export const useGetMessages = (transaction, subtransaction) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const q = query(
      collectionGroup(dbService, transaction),
      where(subtransaction, '==', true)
    );
    console.log('qqq', q);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        console.log('ddd');
        result.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(result);
    });

    return unsubscribe;
  }, [collection]);

  console.log(documents);

  return { documents };
};

export const useMessage = (transaction, sub) => {
  const messageRef = collection(dbService, transaction)
  const addMessage = async (messages) => {
    console.log(messages);
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const lastTime = timeStamp.fromDate(new Date());

      await addDoc(collection(messageRef, 'chat', sub), {
        ...messages,
        createdAt,
        lastTime,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return { addMessage };
};
